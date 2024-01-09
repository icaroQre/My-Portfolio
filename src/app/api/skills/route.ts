import data from "../../../../public/api/skills.json"

export async function GET () {
    return Response.json(data)
}