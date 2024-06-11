/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    userEmail: string | null;
  }
}
