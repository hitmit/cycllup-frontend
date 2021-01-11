export default async function ({$auth, next}) {
    let loggedIn = $auth.loggedIn;
    if (loggedIn) {
        next('/dashboard')
    }
}