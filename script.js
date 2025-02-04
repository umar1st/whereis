<script>
    document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;

    // Simulate adding items to cart
    document.querySelector(".cart").addEventListener("click", (e) => {
        e.preventDefault();
        cartCount++;
        document.querySelector(".cart-count").textContent = cartCount;
    });
});
// Hero Section Animation on Load
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";
    setTimeout(() => {
        hero.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 300);
});
// Category Card Hover Animation
document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
// Add to Cart Functionality
document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            cartCount++;
            alert("Item added to cart!");
            document.querySelector(".cart-icon").textContent = `🛒 (${cartCount})`;
        });
    });
});
// Firebase Initialization
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Subscription Button Click Event
document.querySelectorAll('.subscribe-btn').forEach(button => {
    button.addEventListener('click', async () => {
        const plan = button.parentElement.getAttribute('data-plan');
        const price = button.parentElement.getAttribute('data-price');

        // Redirect to Payment Page (Simulated Example)
        const paymentURL = `https://payment-gateway.com/pay?amount=${price}&plan=${plan}`;
        window.location.href = paymentURL;

        // Simulate Successful Payment Callback (Replace with real logic)
        setTimeout(async () => {
            const user = auth.currentUser;
            if (user) {
                await db.collection('users').doc(user.uid).update({
                    subscription: plan
                });

                alert(`Subscription successful! You are now a ${plan} subscriber.`);
                updateProfileBadge(plan);
            }
        }, 5000);
    });
});

// Function to Assign Profile Badge Based on Subscription
function updateProfileBadge(plan) {
    const profilePic = document.querySelector('.profile-picture');
    if (!profilePic) return;

    let borderColor;
    if (plan === 'basic') borderColor = '#00c3ff';
    else if (plan === 'premium') borderColor = '#ff9800';
    else if (plan === 'vip') borderColor = '#ff0000';

    profilePic.style.border = `3px solid ${borderColor}`;
}
// Testimonial Auto-Slider
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showNextTestimonial() {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    index = (index + 1) % testimonials.length;
}
setInterval(showNextTestimonial, 3000); // Slide every 3 seconds
// Newsletter Subscription Form
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    alert(`Thank you for subscribing, ${email}!`);
    event.target.reset();
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});


</script>