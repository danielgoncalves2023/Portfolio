
export default interface IRepository {
    id: number,
    name: string,
    description: string,
    html_url: string,
    languages: Record<string, number>,
    updated_at: string
}
