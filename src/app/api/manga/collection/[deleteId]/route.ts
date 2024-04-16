import { prisma } from '@/libs/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest, { params }: { params: { deleteId: string } }) {
  const dataCollection = await prisma.mangaCollection.delete({
    where: {
      id: params.deleteId,
    },
  })
  if (!dataCollection) {
    return NextResponse.json({ status: false, message: 'gagal hapus ke colections' })
  }
  return NextResponse.json({ status: true, message: 'berhasil hapus ke colections' })
}