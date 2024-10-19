export async function POST({ request, cookies }) {
	console.log(request)
	const easterEggs = await cookies.get('easterEggs')
	cookies.set('easterEggs', !easterEggs, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		maxAge: 60 * 60
	})

	return new Response(null, { status: 200 })
}
