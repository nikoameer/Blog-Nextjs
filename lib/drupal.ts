import { DrupalClient } from "next-drupal"

// Create a new DrupalClient, Initialize
// NEXT_PUBLIC_DRUPAL_BASE_URL = URL to your Drupal site defined as an enviroment variable in .env.local file.
export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    //previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
    /* Authenicating via Drupal client */
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET,
    }
  }
)

