<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-col items-center">
      <img
        src="./Anisah.jpg"
        class="profile-image mb-4"
        alt="Profile Picture"
      />
      <h1 class="text-4xl font-bold text-purple-600">
        Noranisah Binti Salahudin
      </h1>
      <!-- Short description of myself -->
      <p class="text-gray-800 mb-4">22FTT1492 | Web Developer | DWDT08</p>
      <!-- Add hobbies, interests, etc. here -->
      <p class="text-gray-700 mb-4">
        I'm a passionate soul who thrives on adventure and creativity. Rugby is
        my adrenaline-fueled escape, where the rush of the game and the
        camaraderie of the team ignite my spirit. When I'm not on the field,
        you'll often find me exploring the globe, soaking in the sights, sounds,
        and flavors of new cultures. Traveling fuels my curiosity and feeds my
        soul with unforgettable experiences. And when I'm back home, there's
        nothing I love more than experimenting in the kitchen, concocting
        delicious dishes inspired by my culinary adventures. Whether it's
        whipping up a hearty stew or mastering the art of a delicate dessert,
        cooking is my way of expressing love and sharing joy with others.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Style for profile image */
.profile-image {
  width: 200px; /* Set desired width */
  height: 200px; /* Set desired height */
  object-fit: cover; /* Prevent image from stretching and maintain aspect ratio */
  border-radius: 50%; /* Make the image round */
}

/* Random design styles */
.container {
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-family: "Arial", sans-serif;
}

p {
  line-height: 1.5;
}
</style>
