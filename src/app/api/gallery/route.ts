import { gallery } from '../../../data/gallery'

export async function GET() {
    return Response.json(gallery);
}