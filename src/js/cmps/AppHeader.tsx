import icon from '../../assets/img/ball.png'
export function AppHeader() {
    return (
        <header className="app-header">
            <div className="main-app">
                <div className='flex align-center'>
                <img className='icon-ball' src={icon} alt=''/>
                <div className="flex align-center">
                    <h1>League</h1>
                </div>
                </div>
            </div>
        </header>
    )
}