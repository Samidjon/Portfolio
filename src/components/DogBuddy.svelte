<script lang="ts">
  import { onDestroy } from 'svelte';

  let isPetting = false;
  let showBubble = false;
  let reaction = '♡';
  let petAnimationTimer: ReturnType<typeof setTimeout> | undefined;
  let bubbleTimer: ReturnType<typeof setTimeout> | undefined;

  const reactions = ['good dog! ♡', 'awoo~', '♡', 'more pets, please!', '*happy wiggles*', 'woof!'];

  function petDog() {
    reaction = reactions[Math.floor(Math.random() * reactions.length)];
    isPetting = true;
    showBubble = true;

    if (petAnimationTimer) clearTimeout(petAnimationTimer);
    if (bubbleTimer) clearTimeout(bubbleTimer);

    petAnimationTimer = setTimeout(() => {
      isPetting = false;
    }, 720);
    bubbleTimer = setTimeout(() => {
      showBubble = false;
    }, 1800);
  }

  onDestroy(() => {
    if (petAnimationTimer) clearTimeout(petAnimationTimer);
    if (bubbleTimer) clearTimeout(bubbleTimer);
  });
</script>

<div class="dog-buddy" class:petting={isPetting}>
  {#if showBubble}
    <span class="pet-bubble" aria-live="polite">{reaction}</span>
    <span class="heart heart-one" aria-hidden="true">♥</span>
    <span class="heart heart-two" aria-hidden="true">♥</span>
  {/if}

  <button
    type="button"
    class="dog-button"
    aria-label="Pet the dog"
    title="Pet me!"
    onclick={petDog}
  >
    <img src="/pet-dog.png" alt="" draggable="false" width="520" height="631" />
    <span class="pet-hint" aria-hidden="true">pet me ♡</span>
  </button>
</div>

<style>
  .dog-buddy {
    position: fixed;
    z-index: 99980;
    right: 8px;
    bottom: 0;
    width: clamp(118px, 15vw, 190px);
    pointer-events: none;
    user-select: none;
  }

  .dog-button {
    position: relative;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    outline-offset: -5px;
    background: transparent;
    cursor: pointer;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
  }

  .dog-button img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    pointer-events: none;
    -webkit-user-drag: none;
    filter: drop-shadow(0 5px 5px #00000012);
    transform-origin: 50% 85%;
    transition: transform 220ms ease, filter 220ms ease;
  }

  .dog-button:hover img {
    transform: translateY(-5px) rotate(-2deg) scale(1.025);
    filter: drop-shadow(0 10px 8px #00000020);
  }

  .dog-button:active img {
    transform: scale(.97) rotate(1deg);
  }

  .petting .dog-button img {
    animation: happy-pet 720ms ease-in-out;
  }

  .pet-hint {
    position: absolute;
    right: 4%;
    bottom: 4%;
    padding: 5px 9px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface-glass);
    color: var(--text-soft);
    font: 11px/1.2 var(--font-mono);
    opacity: 0;
    transform: translateY(3px);
    transition: opacity 180ms ease, transform 180ms ease;
    pointer-events: none;
    white-space: nowrap;
  }

  .dog-button:hover .pet-hint,
  .dog-button:focus-visible .pet-hint {
    opacity: 1;
    transform: translateY(0);
  }

  .pet-bubble {
    position: absolute;
    z-index: 2;
    right: 50%;
    bottom: min(94%, 205px);
    max-width: 190px;
    padding: 9px 13px;
    border: 1px solid var(--border);
    border-radius: 14px 14px 4px 14px;
    background: var(--surface);
    color: var(--text);
    box-shadow: 0 7px 22px #00000018;
    font: 12px/1.35 var(--font-mono);
    white-space: nowrap;
    animation: bubble-in 200ms ease-out both;
    pointer-events: none;
  }

  .heart {
    position: absolute;
    z-index: 3;
    color: #f07e9b;
    font-size: 22px;
    line-height: 1;
    pointer-events: none;
    animation: float-heart 850ms ease-out both;
  }

  .heart-one { right: 28%; top: 18%; }
  .heart-two { right: 58%; top: 29%; animation-delay: 100ms; font-size: 16px; }

  @keyframes happy-pet {
    0%, 100% { transform: translateY(0) rotate(0) scale(1); }
    18% { transform: translateY(-8px) rotate(-4deg) scale(1.035); }
    36% { transform: translateY(-2px) rotate(3deg) scale(1.015); }
    55% { transform: translateY(-6px) rotate(-2deg) scale(1.025); }
    74% { transform: translateY(0) rotate(1deg) scale(1); }
  }

  @keyframes bubble-in {
    from { opacity: 0; transform: translate(5px, 5px) scale(.94); }
    to { opacity: 1; transform: translate(0, 0) scale(1); }
  }

  @keyframes float-heart {
    0% { opacity: 0; transform: translateY(9px) scale(.65) rotate(-10deg); }
    25% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-34px) scale(1.15) rotate(10deg); }
  }

  @media (max-width: 620px) {
    .dog-buddy { right: 2px; width: clamp(94px, 25vw, 126px); }
    .pet-hint { font-size: 10px; padding: 4px 7px; }
    .pet-bubble { bottom: 96%; right: 42%; font-size: 11px; }
    .heart { font-size: 18px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .dog-button img, .pet-hint { transition: none; }
    .petting .dog-button img, .pet-bubble, .heart { animation: none; }
  }
</style>
