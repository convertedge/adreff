<script setup lang="ts">
  const showSuccess = ref(false);
  const isLoading = ref(false);
  const showAds = ref(false);
  const formData = ref({ name: "", email: "", title: "", comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    showSuccess.value = true;

    // Start loading state for ads
    isLoading.value = true;

    // After 3 seconds, show the ads
    setTimeout(() => {
      isLoading.value = false;
      showAds.value = true;
    }, 3000);

    // Clear form
    formData.value = {
      name: "",
      email: "",
      title: "",
      comment: "",
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  };

  const handleChange = (field: any, value: any) => {
    formData.value = { ...formData.value, [field]: value };
  };
</script>

<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2 space-y-8">
          <ArticleContent />

          <div class="border-t pt-8">
            <div class="flex items-center gap-2 mb-6">
              <UIcon name="i-heroicons-chat-bubble-left" class="size-6" />
              <h2 class="text-2xl font-bold">Comments</h2>
            </div>

            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Add new comment</h3>

              <UAlert v-if="showSuccess" title=" Comment submitted successfully!" color="success" />

              <form :onSubmit="handleSubmit" class="space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                  <UInput placeholder="Name" variant="subtle" v-model="formData.name" required />
                  <UInput type="email" variant="subtle" placeholder="Email" v-model="formData.email" required />
                </div>

                <UInput placeholder="Title" variant="subtle" v-model="formData.title" required class="w-full" />

                <UTextarea placeholder="Comment" variant="subtle" v-model="formData.comment" required block :rows="6" class="w-full" />

                <div class="flex justify-end">
                  <UButton type="submit" class="bg-red-600 hover:bg-red-700 text-white px-8" label="Submit" />
                </div>
              </form>
            </div>

            <CommentsList />
          </div>
        </div>

        <div class="block">
          <div class="fixed top-20 w-80 space-y-6">
            <SponsoredAdBox :loading="isLoading" :showAd="showAds" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
