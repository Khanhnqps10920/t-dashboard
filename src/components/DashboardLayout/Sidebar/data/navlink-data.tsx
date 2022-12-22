export type LINK_DATA_Type = {
    icon: JSX.Element,
    icon_active: JSX.Element,
    text: string
}

const LINK_DATA: LINK_DATA_Type[] = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    }, {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    }, {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    }, {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="path-1-inside-1_1017_3190" fill="white">
                <rect x="13" y="11" width="9" height="11" rx="1" />
            </mask>
            <rect x="13" y="11" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-1-inside-1_1017_3190)" />
            <mask id="path-2-inside-2_1017_3190" fill="white">
                <rect x="2" y="15" width="9" height="7" rx="1" />
            </mask>
            <rect x="2" y="15" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-2-inside-2_1017_3190)" />
            <mask id="path-3-inside-3_1017_3190" fill="white">
                <rect x="2" y="2" width="9" height="11" rx="1" />
            </mask>
            <rect x="2" y="2" width="9" height="11" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-3-inside-3_1017_3190)" />
            <mask id="path-4-inside-4_1017_3190" fill="white">
                <rect x="13" y="2" width="9" height="7" rx="1" />
            </mask>
            <rect x="13" y="2" width="9" height="7" rx="1" stroke="#00140E" strokeWidth="3" mask="url(#path-4-inside-4_1017_3190)" />
        </svg>,
        icon_active: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2L15.23 2C13.64 2 13 2.6 13 4.1L13 10.9C13 12.4 13.64 13 15.23 13L19.27 13C20.86 13 21.5 12.4 21.5 10.9Z" fill="#00DEA3" />
            <path d="M11 13.1L11 19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9L2.5 13.1C2.5 11.6 3.14 11 4.73 11L8.77 11C10.36 11 11 11.6 11 13.1Z" fill="#00DEA3" />
            <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15L15.23 15C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="#00DEA3" />
            <path d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2L4.73 2C3.14 2 2.5 2.6 2.5 4.1L2.5 6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z" fill="#00DEA3" />
        </svg>,
        text: 'Dashboard'
    }
]

export default LINK_DATA