import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// GET TODOS
export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});

// ADD TODO
export const add = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });
  },
});

// TOGGLE TODO
export const toggle = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) return;

    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

// DELETE TODO
export const remove = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});