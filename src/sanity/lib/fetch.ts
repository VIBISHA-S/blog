import { client } from "./client"

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
}: {
    query: string
    params?: any
}) {
    return client.fetch<QueryResponse>(query, params, {
        next: {
            revalidate: 60, // Revalidate every minute
        },
    })
}
