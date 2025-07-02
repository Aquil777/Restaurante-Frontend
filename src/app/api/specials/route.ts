import { specials } from '../../../data/specials'

export async function GET() {
    return Response.json(specials);
}