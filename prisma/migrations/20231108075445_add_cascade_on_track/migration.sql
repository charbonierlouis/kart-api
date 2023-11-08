-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_trackId_fkey";

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE;
