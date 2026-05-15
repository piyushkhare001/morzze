"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { useCart } from '@/context/CartContext'

type AppliedCoupon = {
  code: string
  discountValue: string
  title?: string
}

const OrderSummary = () => {
  const { cartItems } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [isApplying, setIsApplying] = useState(false)

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const unitPrice = item.price ?? 0
        return sum + unitPrice * item.quantity
      }, 0),
    [cartItems]
  )

  const calculateDiscount = (amount: number, discountValue: string) => {
    const normalized = discountValue.trim()
    if (!normalized) return 0

    if (normalized.includes("%")) {
      const percent = parseFloat(normalized.replace("%", ""))
      if (Number.isFinite(percent)) {
        return Math.round((amount * percent) / 100)
      }
    }

    const fixed = parseFloat(normalized)
    return Number.isFinite(fixed) ? Math.round(fixed) : 0
  }

  const gst = Math.round(subtotal * 0.18)
  const totalBeforeDiscount = subtotal + gst

  const discountAmount = appliedCoupon
    ? calculateDiscount(totalBeforeDiscount, appliedCoupon.discountValue)
    : 0

  const total = Math.max(totalBeforeDiscount - discountAmount, 0)

  useEffect(() => {
    if (!appliedCoupon) return
    if (!totalBeforeDiscount) {
      setMessage({ type: 'success', text: `Coupon ${appliedCoupon.code} applied.` })
      return
    }
    const amount = calculateDiscount(totalBeforeDiscount, appliedCoupon.discountValue)
    if (amount <= 0) {
      setMessage({ type: 'error', text: 'Coupon is not valid for this cart.' })
      setAppliedCoupon(null)
    }
  }, [appliedCoupon, totalBeforeDiscount])

  const handleApplyCoupon = async () => {
    const value = couponCode.trim().toUpperCase()
    if (!value) {
      setMessage({ type: 'error', text: 'Please enter a promo code.' })
      return
    }

    setIsApplying(true)
    setMessage(null)

    try {
      const response = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: value }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setMessage({ type: 'error', text: data.message || 'Invalid coupon code.' })
        setAppliedCoupon(null)
        return
      }

      setAppliedCoupon({
        code: data.coupon.couponCode,
        discountValue: data.coupon.discountValue,
        title: data.coupon.title,
      })
      setMessage({ type: 'success', text: `Coupon applied: ${data.coupon.discountValue} off` })
      toast.success('Coupon applied successfully')
    } catch (error) {
      setMessage({ type: 'error', text: 'Unable to apply coupon. Please try again.' })
      setAppliedCoupon(null)
    } finally {
      setIsApplying(false)
    }
  }

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode("")
    setMessage({ type: 'success', text: 'Coupon removed.' })
  }

  return (
    <div className="bg-[#141414] border border-[#454545] rounded-md p-8 sticky top-24 font-montserrat">
      <h2 className="text-white text-xl font-medium mb-8">Order Summary</h2>
      
      <div className="space-y-4 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 font-light">Subtotal</span>
          <span className="text-zinc-300">₹{subtotal.toLocaleString("en-IN")}</span>
        </div>

        {appliedCoupon && discountAmount > 0 && (
          <div className="flex justify-between text-sm text-emerald-400">
            <span className="text-zinc-500 font-light">Coupon ({appliedCoupon.code})</span>
            <div className="flex items-center gap-3">
              <span className="text-zinc-300">-₹{discountAmount.toLocaleString("en-IN")}</span>
              <button
                type="button"
                onClick={handleRemoveCoupon}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 font-light">Shipping</span>
          <span className="text-green-500 uppercase text-xs font-bold tracking-widest">Free</span>
        </div>
        <div className="flex justify-between text-sm border-b pb-4  ">
          <span className="text-zinc-500 font-light">GST (18%)</span>
          <span className="text-zinc-300">₹{gst.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <div className="border-t border-zinc-900  mb-5">
        <div className="flex justify-between items-center">
          <span className="text-white font-medium">Total</span>
          <span className="text-white text-xl font-semibold">₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mb-3 block">
          Promo Code
        </label>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
            placeholder="Enter Code"
            className="flex-1 bg-black border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#A88B4A] transition-colors"
          />
          <button
            type="button"
            onClick={handleApplyCoupon}
            disabled={isApplying || cartItems.length === 0}
            className="border border-[#A88B4A] text-[#A88B4A] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#A88B4A] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isApplying ? 'Applying' : 'Apply'}
          </button>
        </div>
        {message && (
          <p className={`mt-3 text-sm ${message.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>
            {message.text}
          </p>
        )}
      </div>

      <Link href={"/checkout"}>
        <button
          disabled={cartItems.length === 0}
          className="w-full bg-[#FFB800] hover:bg-[#E6A600] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed to Checkout
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  )
}

export default OrderSummary