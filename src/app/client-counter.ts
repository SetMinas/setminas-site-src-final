'use client'

import { useState, useEffect } from 'react'

interface AccessLog {
  accessed_at: string;
}

interface StatsResult {
  count: number;
  recentAccess: AccessLog[];
}

/**
 * Client-side counter implementation that doesn't rely on server cookies
 */
export function useClientCounter(): StatsResult {
  const [stats, setStats] = useState<StatsResult>({
    count: 0,
    recentAccess: []
  });

  useEffect(() => {
    // Load from localStorage on client side
    const loadStats = () => {
      try {
        const storedCount = localStorage.getItem('page_views');
        const storedAccess = localStorage.getItem('recent_access');
        
        let count = 0;
        if (storedCount) {
          count = parseInt(storedCount, 10) + 1;
        }
        
        let recentAccess: AccessLog[] = [];
        if (storedAccess) {
          recentAccess = JSON.parse(storedAccess);
        }
        
        // Add current access
        const newAccess = { accessed_at: new Date().toISOString() };
        recentAccess.unshift(newAccess);
        
        // Keep only 5 most recent
        while (recentAccess.length > 5) {
          recentAccess.pop();
        }
        
        // Save updated values
        localStorage.setItem('page_views', count.toString());
        localStorage.setItem('recent_access', JSON.stringify(recentAccess));
        
        setStats({
          count,
          recentAccess
        });
      } catch (error) {
        console.error('Error loading stats:', error);
        setStats({
          count: 0,
          recentAccess: [{ accessed_at: new Date().toISOString() }]
        });
      }
    };
    
    loadStats();
  }, []);
  
  return stats;
}
