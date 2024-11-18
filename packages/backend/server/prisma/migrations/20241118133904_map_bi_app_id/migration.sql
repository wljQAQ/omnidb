-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- BiTable: 保留 biAppId 数据
CREATE TABLE "new_bi_table" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "bi_app_id" TEXT NOT NULL,
    CONSTRAINT "bi_table_bi_app_id_fkey" FOREIGN KEY ("bi_app_id") REFERENCES "bi_app" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bi_table" ("id", "name", "bi_app_id") 
SELECT "id", "name", "biAppId" FROM "bi_table";
DROP TABLE "bi_table";
ALTER TABLE "new_bi_table" RENAME TO "bi_table";

-- UserOAuthAccount: 保留所有字段数据
CREATE TABLE "new_user_oauth_account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "expires_at" DATETIME,
    CONSTRAINT "user_oauth_account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_user_oauth_account" (
    "id", 
    "provider", 
    "user_id", 
    "provider_account_id", 
    "access_token", 
    "refresh_token", 
    "expires_at"
) 
SELECT 
    "id", 
    "provider", 
    "userId", 
    "providerAccountId", 
    "accessToken", 
    "refreshToken", 
    "expiresAt" 
FROM "user_oauth_account";
DROP TABLE "user_oauth_account";
ALTER TABLE "new_user_oauth_account" RENAME TO "user_oauth_account";
CREATE INDEX "user_oauth_account_user_id_idx" ON "user_oauth_account"("user_id");
CREATE UNIQUE INDEX "user_oauth_account_provider_account_id_key" ON "user_oauth_account"("provider_account_id");

-- Users: 保留时间戳数据
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "name" TEXT,
    "avatar" TEXT,
    "password" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" (
    "id", 
    "email", 
    "name", 
    "avatar", 
    "password",
    "created_at",
    "updated_at"
) 
SELECT 
    "id", 
    "email", 
    "name", 
    "avatar", 
    "password",
    COALESCE("createdAt", CURRENT_TIMESTAMP),
    COALESCE("updatedAt", CURRENT_TIMESTAMP)
FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;