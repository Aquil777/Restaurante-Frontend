import { chefs } from '../../../data/chefs'

export async function GET() {
    return Response.json(chefs);
}