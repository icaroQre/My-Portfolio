import data from "../../../../public/api/projects.json"

export async function GET () {
    return Response.json(data)
}