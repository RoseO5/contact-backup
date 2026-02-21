import clientPromise from '@/lib/db';

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db('contact-backup').command({ ping: 1 });
    return Response.json({ 
      success: true, 
      message: "✅ MongoDB LIVE from Termux! Fee: ₦100/month" 
    });
  } catch (e) {
    return Response.json({ 
      success: false, 
      error: e.message 
    }, { status: 500 });
  }
}
