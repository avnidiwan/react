import React from 'react'
import ProfileCard from './ProfileCard.jsx'

const Users = () => {
  let userdata = [
  {
    name: "Aarav Mehta",
    username: "aarav.mehta",
    bio: "Tech geek • Mobile photographer • Coffee addict ☕",
    posts: 142,
    followers: "12.3K",
    following: 321,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Simran Kaur",
    username: "simran_kaur",
    bio: "UI/UX Designer • Crafting clean and creative interfaces ✨",
    posts: 89,
    followers: "8.4K",
    following: 512,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Rohit Verma",
    username: "rohit.v",
    bio: "Fitness & Lifestyle • Daily motivation 💪🔥 | Let's play!",
    posts: 210,
    followers: "20.8K",
    following: 180,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Ananya Singh",
    username: "ananya_s",
    bio: "Baker • Food blogger • Sharing sweet moments 🍰",
    posts: 156,
    followers: "14.6K",
    following: 340,
    avatar: "https://i.pravatar.cc/150?img=18"
  },
  {
    name: "Kabir Malhotra",
    username: "kabir.m",
    bio: "Travel addict 🌍 | Exploring places one step at a time",
    posts: 75,
    followers: "6.2K",
    following: 220,
    avatar: "https://i.pravatar.cc/150?img=22"
  },
  {
    name: "Isha Patel",
    username: "isha_patell",
    bio: "Book lover • Writer • Dreamer and Achiever📚✨",
    posts: 98,
    followers: "4.7K",
    following: 530,
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "Vikram Raj",
    username: "vikram_raj",
    bio: "Full-stack developer • Coding life 💻",
    posts: 133,
    followers: "9.1K",
    following: 301,
    avatar: "https://i.pravatar.cc/150?img=36"
  },
  {
    name: "Pooja Sharma",
    username: "pooja.sharma",
    bio: "Fashion • Beauty • Style inspiration 💄",
    posts: 240,
    followers: "18.2K",
    following: 420,
    avatar: "https://i.pravatar.cc/150?img=45"
  },
  {
    name: "Yash Gupta",
    username: "yashgupta",
    bio: "Gamer • Streamer 🎮 | Let's play!",
    posts: 52,
    followers: "3.9K",
    following: 190,
    avatar: "https://i.pravatar.cc/150?img=52"
  },
  {
    name: "Tanya Joshi",
    username: "tanya_j",
    bio: "Student • Poet • Lover of sunsets 🌅",
    posts: 61,
    followers: "2.2K",
    following: 276,
    avatar: "https://i.pravatar.cc/150?img=60"
  },

  // 🔥 NEW 10 USERS
  {
    name: "Harsh Vardhan",
    username: "harsh_v",
    bio: "Coder by day, gamer by night 🎮",
    posts: 148,
    followers: "7.1K",
    following: 310,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Kritika Mahajan",
    username: "kritika_m",
    bio: "Lifestyle • Travel • Daily vibes ✨",
    posts: 203,
    followers: "15.4K",
    following: 410,
    avatar: "https://i.pravatar.cc/150?img=28"
  },
  {
    name: "Dev Patel",
    username: "dev.patel",
    bio: "Cricket lover 🏏 | Fitness enthusiast",
    posts: 87,
    followers: "5.3K",
    following: 220,
    avatar: "https://i.pravatar.cc/150?img=14"
  },
  {
    name: "Shruti Nair",
    username: "shruti_n",
    bio: "Artist • Painter 🎨 | Colorful world",
    posts: 112,
    followers: "6.8K",
    following: 330,
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Manav Kapoor",
    username: "manav_k",
    bio: "Entrepreneur • Hustling every day 🚀",
    posts: 178,
    followers: "12.9K",
    following: 390,
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Riya Desai",
    username: "riya_desai",
    bio: "Digital creator • Spreading positivity 🌸",
    posts: 134,
    followers: "9.6K",
    following: 287,
    avatar: "https://i.pravatar.cc/150?img=39"
  },
  {
    name: "Arjun Yadav",
    username: "arjun_y",
    bio: "Traveler • Storyteller ✈️",
    posts: 99,
    followers: "4.9K",
    following: 245,
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    name: "Nisha Khanna",
    username: "nisha_k",
    bio: "Makeup artist • Creative soul 💋",
    posts: 201,
    followers: "17.8K",
    following: 410,
    avatar: "https://i.pravatar.cc/150?img=55"
  },
  {
    name: "Sahil Gupta",
    username: "sahil_g",
    bio: "Music producer • Beats & vibes 🎧",
    posts: 72,
    followers: "3.5K",
    following: 188,
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    name: "Muskan Arora",
    username: "muskan.a",
    bio: "Coffee • Journaling • Slow mornings ☕✨",
    posts: 84,
    followers: "2.9K",
    following: 260,
    avatar: "https://i.pravatar.cc/150?img=62"
  },
  {
    name: "Vikram Raj",
    username: "vikram_raj",
    bio: "Full-stack developer • Coding life 💻",
    posts: 133,
    followers: "9.1K",
    following: 301,
    avatar: "https://i.pravatar.cc/150?img=36"
  }
];
    
  return (
    <div className="users-container" >
      {
      userdata.map((a, b) => (
        <ProfileCard
          key={b}
          name={a.name}
          username={a.username}
          bio={a.bio}
          posts={a.posts}
          followers={a.followers}
          following={a.following}
          avatar={a.avatar}
        />
      ))
      }
    </div>
  );
}

export default Users
