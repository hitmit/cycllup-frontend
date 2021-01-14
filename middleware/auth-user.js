export default async function ({store, next}) {
    let loggedIn = store.state.auth.loggedIn;
    if (!loggedIn) {
        next('/login');
    }
}