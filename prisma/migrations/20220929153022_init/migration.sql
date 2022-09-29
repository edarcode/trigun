/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('emission', 'finalized');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "original" VARCHAR(255) NOT NULL,
    "animeId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'finalized',
    "score" DECIMAL(65,30) NOT NULL,
    "name" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "seasons" INTEGER NOT NULL,
    "synopsis" TEXT,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnimeToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Image_original_key" ON "Image"("original");

-- CreateIndex
CREATE UNIQUE INDEX "Anime_name_key" ON "Anime"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToCategory_AB_unique" ON "_AnimeToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToCategory_B_index" ON "_AnimeToCategory"("B");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToCategory" ADD CONSTRAINT "_AnimeToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToCategory" ADD CONSTRAINT "_AnimeToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
