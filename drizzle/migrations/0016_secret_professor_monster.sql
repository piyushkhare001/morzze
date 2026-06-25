ALTER TABLE "categories" ADD COLUMN "horizontal_banner_image" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "meta_title" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "meta_description" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "meta_og_image" varchar;--> statement-breakpoint
ALTER TABLE "stores" ADD COLUMN "contact_person_name" varchar(255);--> statement-breakpoint
ALTER TABLE "stores" ADD COLUMN "land_line_number" varchar(20);