-- CreateTable
CREATE TABLE "SessionPoint" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "accuracy" DOUBLE PRECISION NOT NULL,
    "heading" DOUBLE PRECISION NOT NULL,
    "timestamp" TEXT NOT NULL,
    "sessionId" INTEGER NOT NULL,

    CONSTRAINT "SessionPoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SessionPoint" ADD CONSTRAINT "SessionPoint_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
