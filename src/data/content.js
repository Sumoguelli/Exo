export const mainLinks = [
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Projects', href: '#' }
]

export const socials = [
  { name: 'Facebook', icon: '/icon-facebook.svg', href: '#' },
  { name: 'Instagram', icon: '/icon-instagram.svg', href: '#' },
  { name: 'Twitter', icon: '/icon-twitter.svg', href: '#' },
  { name: 'Pinterest', icon: '/icon-pinterest.svg', href: '#' }
]

export const testimonials = [
  {
    image: '/image-emily.jpg',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    role: 'Marketing Director'
  },
  {
    image: '/image-thomas.jpg',
    text: 'Sunnysides enthusiasm coupled with their keen interest in our brands success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    role: 'Chief Operating Officer'
  },
  {
    image: '/image-jennie.jpg',
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    role: 'Business Owner'
  }
]

export const textBlocks = [
  {
    title: 'Transform your brand',
    text:
      'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    accent: 'yellow'
  },
  {
    title: 'Stand out to the right audience',
    text:
      'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places.',
    accent: 'red'
  }
]

export const marketingBlocks = [
  {
    type: 'text',
    title: textBlocks[0].title,
    text: textBlocks[0].text,
    accent: textBlocks[0].accent
  },
  { type: 'image', src: '/image-transform.jpg', alt: 'Egg' },
  { type: 'image', src: '/image-stand-out.jpg', alt: 'Pink cup' },
  {
    type: 'text',
    title: textBlocks[1].title,
    text: textBlocks[1].text,
    accent: textBlocks[1].accent
  }
]

export const serviceBlocks = [
  {
    title: 'Graphic Design',
    text: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.',
    type: 'graphic'
  },
  {
    title: 'Photography',
    text: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    type: 'photo'
  }
]

export const galleryImages = [
  { src: '/image-gallery-milkbottles.jpg', alt: 'Milk bottles' },
  { src: '/image-gallery-orange.jpg', alt: 'Orange' },
  { src: '/image-gallery-cone.jpg', alt: 'Cone' },
  { src: '/image-gallery-sugarcubes.jpg', alt: 'Sugar cubes' }
]
