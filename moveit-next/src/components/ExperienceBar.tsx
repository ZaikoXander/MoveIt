export function ExperienceBar() {
    return (
        <header className="experience_bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className="current_experience" style={{ left: '50%'}}>
                    300 xp
                    </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}