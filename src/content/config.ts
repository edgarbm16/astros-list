import { defineCollection, z } from "astro:content";
// z -> zod schema

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        seller: z.string(),
        img: z.string(),
        quantity: z.number(),
        description: z.string(),
        buy: z.object({
            mexico: z.string().url(),
            usa: z.string().url(),
        }),
    })
})

export const collections = {
    products
}