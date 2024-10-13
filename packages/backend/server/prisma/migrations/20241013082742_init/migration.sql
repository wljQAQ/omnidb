/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "bi_app" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "bi_table" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "BiApp_id" TEXT NOT NULL,
    CONSTRAINT "bi_table_BiApp_id_fkey" FOREIGN KEY ("BiApp_id") REFERENCES "bi_app" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
