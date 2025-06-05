$(document).ready(function() {
            const timezoneImages = {
                'America/New_York': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
                'Europe/London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
                'Asia/Tokyo': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
                'Australia/Sydney': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
                'Europe/Paris': 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f',
                'Asia/Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
                'Asia/Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
                'Asia/Shanghai': 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2',
                'Europe/Berlin': 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc',
                'Europe/Rome': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
                'America/Los_Angeles': 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160',
                'Asia/Seoul': 'https://images.unsplash.com/photo-1538485399081-7c8edb0e1b1d',
                'Asia/Kolkata': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
                'America/Sao_Paulo': 'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
                'Africa/Cairo': 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a'
            };

            function updateClock() {
                const timezone = $('#timezoneSelect').val();
                const now = new Date().toLocaleString('en-US', { timeZone: timezone });
                const [date, time] = now.split(', ');
                
                // Update digital clock
                $('#time').text(time);
                $('#date').text(date);
                $('#timezone').text(timezone.split('/').pop().replace('_', ' '));
                
                // Update analog clock
                const timeObj = new Date().toLocaleString('en-US', { timeZone: timezone });
                const currentTime = new Date(timeObj);
                const hours = currentTime.getHours() % 12;
                const minutes = currentTime.getMinutes();
                const seconds = currentTime.getSeconds();
                
                const hourDeg = (hours * 30) + (minutes * 0.5);
                const minuteDeg = minutes * 6;
                const secondDeg = seconds * 6;
                
                $('#hourHand').css('transform', `translateX(-50%) rotate(${hourDeg}deg)`);
                $('#minuteHand').css('transform', `translateX(-50%) rotate(${minuteDeg}deg)`);
                $('#secondHand').css('transform', `translateX(-50%) rotate(${secondDeg}deg)`);
                
                // Update background
                $('body').css('background-image', `url(${timezoneImages[timezone]})`);
            }

            // Initial update
            updateClock();

            // Update every second
            setInterval(updateClock, 1000);

            // Handle timezone change
            $('#timezoneSelect').change(updateClock);
        });
