import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        // Define the mapping between routes and titles
        const routeTitles = {
            '/': 'Hem Joshi',
            '/about': 'Hem Joshi - About',
            '/skills': 'Hem Joshi - Skills',
            '/projects': 'Hem Joshi - Projects',
            '/contact': 'Hem Joshi - Contact',
        };

        // Get the title based on the current path
        // Fallback to 'Hem Joshi' if the route isn't in the list (e.g., 404)
        const currentTitle = routeTitles[location.pathname] || 'Hem Joshi - Page Not Found';

        // Update the document title
        document.title = currentTitle;
    }, [location]); // Re-run this effect whenever location changes
};

export default usePageTitle;