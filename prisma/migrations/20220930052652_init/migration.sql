-- CreateEnum
CREATE TYPE "Status" AS ENUM ('emission', 'finalized');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "img" TEXT NOT NULL,
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
    "synopsis" TEXT NOT NULL,

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
