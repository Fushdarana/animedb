const JIKAN_API = 'https://api.jikan.moe/v4';

export async function searchAnime(query: string) {
    return makeRequestToJikan(query)
}

export async function getAnimeCharacters(id: number) {
    return makeRequestToJikan(`anime/${id}/characters`)
}

export async function makeRequestToJikan(query: string) {
    return await fetch(`${JIKAN_API}/${query}`)
        .then(res => res.json())
        .then(res => res.data);
}
