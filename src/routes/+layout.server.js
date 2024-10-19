export async function load({ cookies }) {
	const easterEggs = cookies.set('easterEggs', false, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		maxAge: 60 * 60 // One hour
	})
}
