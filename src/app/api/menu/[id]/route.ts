import { menu } from '../../../../data/menu'

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const food = menu.find((item: { id: number }) => item.id.toString() == params.id);

    return Response.json(food);
}