/*
  Warnings:

  - Added the required column `updated_at` to the `user_oauth_account` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_oauth_account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "scope" TEXT,
    "expires_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "user_oauth_account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_user_oauth_account" ("access_token", "expires_at", "id", "provider", "provider_account_id", "refresh_token", "user_id") SELECT "access_token", "expires_at", "id", "provider", "provider_account_id", "refresh_token", "user_id" FROM "user_oauth_account";
DROP TABLE "user_oauth_account";
ALTER TABLE "new_user_oauth_account" RENAME TO "user_oauth_account";
CREATE INDEX "user_oauth_account_user_id_idx" ON "user_oauth_account"("user_id");
CREATE UNIQUE INDEX "user_oauth_account_provider_account_id_key" ON "user_oauth_account"("provider_account_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
