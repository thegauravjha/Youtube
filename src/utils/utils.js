export const calculateHowOldVideoIs = (publishedDate) => {
    const published = new Date(publishedDate);
    const now = new Date();

    const diffTime = Math.abs(now - published);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.ceil(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears >= 1) {
        return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    } else if (diffMonths >= 1) {
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    } else {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }
}

export const convertViews = (viewCount) => {
    if (viewCount < 1000) {
        return `${viewCount} view${viewCount > 1 ? 's' : ''}`;
    } else if (viewCount < 1_000_000) {
        const thousands = Math.floor(viewCount / 1_000);
        return `${thousands}K views`;
    } else if (viewCount < 1_000_000_000) {
        const millions = (viewCount / 1_000_000).toFixed(1).replace(/\.0$/, '');
        return `${millions}M views`;
    } else {
        const billions = (viewCount / 1_000_000_000).toFixed(1).replace(/\.0$/, '');
        return `${billions}B views`;
    }
}