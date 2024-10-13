/*
  Warnings:

  - You are about to drop the column `BiApp_id` on the `bi_table` table. All the data in the column will be lost.
  - Added the required column `bi_app_id` to the `bi_table` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bi_table" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bi_app_id" TEXT NOT NULL,
    CONSTRAINT "bi_table_bi_app_id_fkey" FOREIGN KEY ("bi_app_id") REFERENCES "bi_app" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bi_table" ("id") SELECT "id" FROM "bi_table";
DROP TABLE "bi_table";
ALTER TABLE "new_bi_table" RENAME TO "bi_table";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
