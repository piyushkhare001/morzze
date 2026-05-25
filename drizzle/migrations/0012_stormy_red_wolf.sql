CREATE TYPE "public"."categoryType" AS ENUM('kitchen', 'bathroom');--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "type" "categoryType";