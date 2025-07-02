import { testimonials } from '../../../data/testimonial'

export async function GET() {
    return Response.json(testimonials);
}