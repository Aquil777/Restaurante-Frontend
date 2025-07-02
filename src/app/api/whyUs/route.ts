import { whyUs } from '../../../data/whyUs'

export async function GET() {
    return Response.json(whyUs);
}