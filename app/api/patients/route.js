export const GET = async (request, { params }) => {
    try {

        const res = await fetch('https://api.github.com/repos/vercel/next.js');
        const repo = await res.json();

        return new Response(JSON.stringify(repo), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 