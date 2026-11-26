import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, ShoppingBasket, MapPin, Clock3, ChevronDown, Plus, Minus, Heart, Star, ArrowRight, Menu, X, Leaf, Truck, ShieldCheck, Headphones, Trash2, CheckCircle2, Sparkles } from 'lucide-react';
import './style.css';

const products = [
  {id:1,name:'Alphonso Mangoes',unit:'1 kg',price:189,old:229,category:'Fruits',emoji:'🥭',tag:'Bestseller',rating:4.9,color:'#fff0d6'},
  {id:2,name:'Fresh Strawberries',unit:'200 g',price:99,old:129,category:'Fruits',emoji:'🍓',tag:'20% OFF',rating:4.8,color:'#ffe8e7'},
  {id:3,name:'Farm Fresh Avocado',unit:'2 pcs',price:119,old:149,category:'Fruits',emoji:'🥑',tag:'Fresh pick',rating:4.7,color:'#e8f2dd'},
  {id:4,name:'Organic Bananas',unit:'6 pcs',price:49,old:59,category:'Fruits',emoji:'🍌',tag:'',rating:4.8,color:'#fff6d8'},
  {id:5,name:'Green Broccoli',unit:'1 pc',price:65,old:79,category:'Vegetables',emoji:'🥦',tag:'Farm fresh',rating:4.6,color:'#e7f2e4'},
  {id:6,name:'Red Bell Pepper',unit:'500 g',price:74,old:89,category:'Vegetables',emoji:'🫑',tag:'',rating:4.7,color:'#fce9e2'},
  {id:7,name:'Baby Spinach',unit:'250 g',price:39,old:49,category:'Vegetables',emoji:'🥬',tag:'',rating:4.6,color:'#e8f1df'},
  {id:8,name:'Farm Eggs',unit:'6 pcs',price:59,old:69,category:'Dairy & Eggs',emoji:'🥚',tag:'Protein pick',rating:4.9,color:'#fff2df'},
  {id:9,name:'Fresh Cow Milk',unit:'1 litre',price:62,old:68,category:'Dairy & Eggs',emoji:'🥛',tag:'Daily essential',rating:4.8,color:'#e8f3f8'},
  {id:10,name:'Greek Yogurt',unit:'400 g',price:115,old:139,category:'Dairy & Eggs',emoji:'🥣',tag:'',rating:4.7,color:'#f2eafa'},
  {id:11,name:'Whole Wheat Bread',unit:'400 g',price:45,old:55,category:'Bakery',emoji:'🍞',tag:'Baked today',rating:4.6,color:'#f5eadb'},
  {id:12,name:'Crunchy Almonds',unit:'200 g',price:169,old:199,category:'Snacks',emoji:'🥜',tag:'',rating:4.8,color:'#f1eadf'},
  {id:13,name:'Kashmir Apples',unit:'1 kg',price:149,old:179,category:'Fruits',emoji:'🍎',tag:'Seasonal',rating:4.8,color:'#ffe9e5'},
  {id:14,name:'Nagpur Oranges',unit:'1 kg',price:89,old:109,category:'Fruits',emoji:'🍊',tag:'Juicy',rating:4.7,color:'#fff0d9'},
  {id:15,name:'Green Grapes',unit:'500 g',price:69,old:89,category:'Fruits',emoji:'🍇',tag:'',rating:4.6,color:'#eee8fa'},
  {id:16,name:'Pomegranate',unit:'2 pcs',price:99,old:129,category:'Fruits',emoji:'🍎',tag:'Fresh pick',rating:4.7,color:'#f8e5e9'},
  {id:17,name:'Papaya',unit:'1 pc',price:55,old:69,category:'Fruits',emoji:'🍈',tag:'',rating:4.5,color:'#fff0d9'},
  {id:18,name:'Watermelon',unit:'1 pc',price:79,old:99,category:'Fruits',emoji:'🍉',tag:'Sweet',rating:4.6,color:'#ffe9e8'},
  {id:19,name:'Pineapple',unit:'1 pc',price:69,old:89,category:'Fruits',emoji:'🍍',tag:'',rating:4.5,color:'#fff4d8'},
  {id:20,name:'Kiwi',unit:'3 pcs',price:119,old:149,category:'Fruits',emoji:'🥝',tag:'',rating:4.7,color:'#eaf1df'},
  {id:21,name:'Lemons',unit:'6 pcs',price:35,old:45,category:'Fruits',emoji:'🍋',tag:'Daily essential',rating:4.6,color:'#fff6d8'},
  {id:22,name:'Guava',unit:'500 g',price:49,old:65,category:'Fruits',emoji:'🍐',tag:'',rating:4.5,color:'#edf2df'},
  {id:23,name:'Tomatoes',unit:'1 kg',price:39,old:49,category:'Vegetables',emoji:'🍅',tag:'Kitchen essential',rating:4.7,color:'#fce8e5'},
  {id:24,name:'Potatoes',unit:'1 kg',price:32,old:40,category:'Vegetables',emoji:'🥔',tag:'',rating:4.7,color:'#f3eadc'},
  {id:25,name:'Onions',unit:'1 kg',price:38,old:48,category:'Vegetables',emoji:'🧅',tag:'',rating:4.6,color:'#f1e8ef'},
  {id:26,name:'Carrots',unit:'500 g',price:35,old:45,category:'Vegetables',emoji:'🥕',tag:'',rating:4.8,color:'#fff0df'},
  {id:27,name:'Cucumber',unit:'500 g',price:29,old:39,category:'Vegetables',emoji:'🥒',tag:'Hydrating',rating:4.6,color:'#e8f2df'},
  {id:28,name:'Cauliflower',unit:'1 pc',price:49,old:65,category:'Vegetables',emoji:'🥦',tag:'',rating:4.5,color:'#edf1e7'},
  {id:29,name:'Cabbage',unit:'1 pc',price:35,old:45,category:'Vegetables',emoji:'🥬',tag:'',rating:4.5,color:'#e8f1df'},
  {id:30,name:'Brinjal',unit:'500 g',price:32,old:42,category:'Vegetables',emoji:'🍆',tag:'',rating:4.5,color:'#eee8f5'},
  {id:31,name:'Green Chillies',unit:'100 g',price:15,old:20,category:'Vegetables',emoji:'🌶️',tag:'',rating:4.6,color:'#e9f1df'},
  {id:32,name:'Coriander Leaves',unit:'1 bunch',price:12,old:18,category:'Vegetables',emoji:'🌿',tag:'Fresh herbs',rating:4.7,color:'#e8f2df'},
  {id:33,name:'Sweet Corn',unit:'2 pcs',price:39,old:49,category:'Vegetables',emoji:'🌽',tag:'',rating:4.6,color:'#fff3d8'},
  {id:34,name:'Ladies Finger',unit:'500 g',price:35,old:45,category:'Vegetables',emoji:'🥬',tag:'',rating:4.5,color:'#eaf2df'},
  {id:35,name:'Paneer',unit:'200 g',price:89,old:109,category:'Dairy & Eggs',emoji:'🧀',tag:'Protein pick',rating:4.8,color:'#fff0df'},
  {id:36,name:'Butter',unit:'100 g',price:58,old:68,category:'Dairy & Eggs',emoji:'🧈',tag:'',rating:4.7,color:'#fff4d9'},
  {id:37,name:'Cheddar Cheese',unit:'200 g',price:139,old:159,category:'Dairy & Eggs',emoji:'🧀',tag:'',rating:4.7,color:'#fff0d8'},
  {id:38,name:'Fresh Curd',unit:'500 g',price:38,old:45,category:'Dairy & Eggs',emoji:'🥣',tag:'Daily essential',rating:4.8,color:'#f1eafa'},
  {id:39,name:'Buttermilk',unit:'500 ml',price:25,old:30,category:'Dairy & Eggs',emoji:'🥛',tag:'',rating:4.6,color:'#e8f3f8'},
  {id:40,name:'Ghee',unit:'500 ml',price:299,old:329,category:'Dairy & Eggs',emoji:'🫙',tag:'',rating:4.8,color:'#fff1d8'},
  {id:41,name:'Toned Milk',unit:'500 ml',price:31,old:34,category:'Dairy & Eggs',emoji:'🥛',tag:'',rating:4.7,color:'#e8f3f8'},
  {id:42,name:'Brown Eggs',unit:'6 pcs',price:72,old:85,category:'Dairy & Eggs',emoji:'🥚',tag:'',rating:4.7,color:'#fff1df'},
  {id:43,name:'Multigrain Bread',unit:'400 g',price:55,old:65,category:'Bakery',emoji:'🍞',tag:'Baked today',rating:4.7,color:'#f5eadb'},
  {id:44,name:'Burger Buns',unit:'4 pcs',price:35,old:45,category:'Bakery',emoji:'🍔',tag:'',rating:4.5,color:'#f5eadb'},
  {id:45,name:'Croissant',unit:'2 pcs',price:89,old:109,category:'Bakery',emoji:'🥐',tag:'',rating:4.8,color:'#f7ead8'},
  {id:46,name:'Chocolate Muffins',unit:'2 pcs',price:69,old:85,category:'Bakery',emoji:'🧁',tag:'',rating:4.7,color:'#f2e8e2'},
  {id:47,name:'Whole Wheat Pita',unit:'4 pcs',price:59,old:69,category:'Bakery',emoji:'🫓',tag:'',rating:4.5,color:'#f5eadb'},
  {id:48,name:'Garlic Bread',unit:'1 pack',price:79,old:95,category:'Bakery',emoji:'🥖',tag:'',rating:4.6,color:'#f5eadb'},
  {id:49,name:'Potato Chips',unit:'150 g',price:35,old:45,category:'Snacks',emoji:'🍟',tag:'Crunchy',rating:4.6,color:'#fff0df'},
  {id:50,name:'Masala Peanuts',unit:'200 g',price:49,old:59,category:'Snacks',emoji:'🥜',tag:'',rating:4.7,color:'#f1eadf'},
  {id:51,name:'Roasted Makhana',unit:'100 g',price:99,old:119,category:'Snacks',emoji:'🍿',tag:'Healthy snack',rating:4.8,color:'#f4eadf'},
  {id:52,name:'Dark Chocolate',unit:'100 g',price:89,old:109,category:'Snacks',emoji:'🍫',tag:'',rating:4.8,color:'#f0e6e2'},
  {id:53,name:'Digestive Biscuits',unit:'250 g',price:40,old:50,category:'Snacks',emoji:'🍪',tag:'',rating:4.6,color:'#f5eadb'},
  {id:54,name:'Trail Mix',unit:'200 g',price:149,old:179,category:'Snacks',emoji:'🥜',tag:'',rating:4.8,color:'#f1eadf'},
  {id:55,name:'Popcorn',unit:'90 g',price:35,old:45,category:'Snacks',emoji:'🍿',tag:'',rating:4.5,color:'#fff1d8'},
  {id:56,name:'Energy Bars',unit:'3 pcs',price:99,old:129,category:'Snacks',emoji:'🍫',tag:'',rating:4.6,color:'#f0e8df'},
  {id:57,name:'Basmati Rice',unit:'1 kg',price:119,old:139,category:'Staples & Grains',emoji:'🍚',tag:'Pantry staple',rating:4.8,color:'#f4eddf'},
  {id:58,name:'Toor Dal',unit:'1 kg',price:149,old:169,category:'Staples & Grains',emoji:'🫘',tag:'',rating:4.7,color:'#f3eadc'},
  {id:59,name:'Moong Dal',unit:'1 kg',price:129,old:149,category:'Staples & Grains',emoji:'🫘',tag:'',rating:4.7,color:'#f0eadc'},
  {id:60,name:'Wheat Flour',unit:'5 kg',price:249,old:279,category:'Staples & Grains',emoji:'🌾',tag:'',rating:4.7,color:'#f5eadb'},
  {id:61,name:'Sugar',unit:'1 kg',price:48,old:55,category:'Staples & Grains',emoji:'🧂',tag:'',rating:4.6,color:'#f5f0e8'},
  {id:62,name:'Iodized Salt',unit:'1 kg',price:22,old:27,category:'Staples & Grains',emoji:'🧂',tag:'',rating:4.6,color:'#f5f0e8'},
  {id:63,name:'Sunflower Oil',unit:'1 litre',price:139,old:159,category:'Staples & Grains',emoji:'🫗',tag:'',rating:4.7,color:'#fff2d8'},
  {id:64,name:'Poha',unit:'500 g',price:42,old:52,category:'Staples & Grains',emoji:'🥣',tag:'',rating:4.6,color:'#f4eddf'},
  {id:65,name:'Orange Juice',unit:'1 litre',price:99,old:119,category:'Beverages',emoji:'🧃',tag:'Chilled favourite',rating:4.7,color:'#fff0d9'},
  {id:66,name:'Green Tea',unit:'25 bags',price:129,old:149,category:'Beverages',emoji:'🍵',tag:'',rating:4.8,color:'#eaf1df'},
  {id:67,name:'Ground Coffee',unit:'200 g',price:189,old:219,category:'Beverages',emoji:'☕',tag:'',rating:4.8,color:'#eee6df'},
  {id:68,name:'Coconut Water',unit:'200 ml',price:35,old:45,category:'Beverages',emoji:'🥥',tag:'',rating:4.6,color:'#e8f2e8'},
  {id:69,name:'Sparkling Water',unit:'750 ml',price:45,old:55,category:'Beverages',emoji:'🫧',tag:'',rating:4.5,color:'#e8f3f8'},
  {id:70,name:'Mango Drink',unit:'1 litre',price:85,old:99,category:'Beverages',emoji:'🥭',tag:'',rating:4.6,color:'#fff0d8'},
  {id:71,name:'Hand Wash',unit:'250 ml',price:79,old:95,category:'Personal Care',emoji:'🧴',tag:'Everyday care',rating:4.7,color:'#e8f3f0'},
  {id:72,name:'Bathing Soap',unit:'4 bars',price:99,old:119,category:'Personal Care',emoji:'🧼',tag:'',rating:4.7,color:'#eaf2f5'},
  {id:73,name:'Shampoo',unit:'340 ml',price:189,old:219,category:'Personal Care',emoji:'🧴',tag:'',rating:4.6,color:'#f0eafa'},
  {id:74,name:'Toothpaste',unit:'150 g',price:89,old:105,category:'Personal Care',emoji:'🪥',tag:'',rating:4.7,color:'#e8f3f8'},
  {id:75,name:'Toothbrush',unit:'2 pcs',price:55,old:69,category:'Personal Care',emoji:'🪥',tag:'',rating:4.5,color:'#e8f3f8'},
  {id:76,name:'Body Lotion',unit:'200 ml',price:149,old:179,category:'Personal Care',emoji:'🧴',tag:'',rating:4.7,color:'#f2eafa'},
  {id:77,name:'Dishwash Liquid',unit:'500 ml',price:99,old:119,category:'Household',emoji:'🧽',tag:'Home essential',rating:4.7,color:'#e8f3f0'},
  {id:78,name:'Laundry Detergent',unit:'1 kg',price:129,old:149,category:'Household',emoji:'🫧',tag:'',rating:4.6,color:'#e8f3f8'},
  {id:79,name:'Floor Cleaner',unit:'1 litre',price:109,old:129,category:'Household',emoji:'🧹',tag:'',rating:4.6,color:'#eaf1df'},
  {id:80,name:'Garbage Bags',unit:'30 pcs',price:69,old:85,category:'Household',emoji:'🗑️',tag:'',rating:4.5,color:'#edf0e9'},
  {id:81,name:'Paper Towels',unit:'2 rolls',price:79,old:95,category:'Household',emoji:'🧻',tag:'',rating:4.6,color:'#f5f0e8'},
  {id:82,name:'Kitchen Sponges',unit:'3 pcs',price:35,old:45,category:'Household',emoji:'🧽',tag:'',rating:4.5,color:'#e8f3df'},
  {id:83,name:'Chicken Breast',unit:'500 g',price:179,old:199,category:'Meat & Seafood',emoji:'🍗',tag:'Chilled fresh',rating:4.7,color:'#f7e8e3'},
  {id:84,name:'Chicken Curry Cut',unit:'500 g',price:159,old:179,category:'Meat & Seafood',emoji:'🍗',tag:'',rating:4.6,color:'#f7e8e3'},
  {id:85,name:'Fresh Fish Fillet',unit:'500 g',price:229,old:259,category:'Meat & Seafood',emoji:'🐟',tag:'',rating:4.7,color:'#e8f2f5'},
  {id:86,name:'Prawns',unit:'250 g',price:199,old:229,category:'Meat & Seafood',emoji:'🦐',tag:'',rating:4.7,color:'#f8e9e4'},
  {id:87,name:'Frozen Green Peas',unit:'500 g',price:79,old:95,category:'Frozen Foods',emoji:'🫛',tag:'',rating:4.6,color:'#eaf2df'},
  {id:88,name:'French Fries',unit:'500 g',price:99,old:119,category:'Frozen Foods',emoji:'🍟',tag:'',rating:4.7,color:'#f5eadb'},
  {id:89,name:'Mixed Veg Pack',unit:'500 g',price:89,old:105,category:'Frozen Foods',emoji:'🥕',tag:'',rating:4.6,color:'#eaf2df'},
  {id:90,name:'Vanilla Ice Cream',unit:'500 ml',price:149,old:169,category:'Frozen Foods',emoji:'🍨',tag:'',rating:4.8,color:'#f2eafa'},
  {id:91,name:"Baby Diapers",unit:"1 pack",price:399,old:449,category:"Baby & Kids",emoji:"🧷",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:92,name:"Baby Wipes",unit:" 1 pack",price:99,old:119,category:"Baby & Kids",emoji:"🧻",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:93,name:"Baby Lotion",unit:"200 ml",price:149,old:179,category:"Baby & Kids",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:94,name:"Baby Cereal",unit:"300 g",price:225,old:249,category:"Baby & Kids",emoji:"🥣",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:95,name:"Kids Juice Box",unit:"6 pcs",price:120,old:145,category:"Baby & Kids",emoji:"🧃",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:96,name:"Dog Food",unit:"1 kg",price:299,old:339,category:"Pet Supplies",emoji:"🐶",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:97,name:"Cat Food",unit:"1 kg",price:329,old:369,category:"Pet Supplies",emoji:"🐱",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:98,name:"Pet Treats",unit:"150 g",price:129,old:149,category:"Pet Supplies",emoji:"🦴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:99,name:"Cat Litter",unit:"5 kg",price:349,old:399,category:"Pet Supplies",emoji:"🐾",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:100,name:"Pet Shampoo",unit:"200 ml",price:179,old:209,category:"Pet Supplies",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:101,name:"Dinner Plate Set",unit:"6 pcs",price:399,old:499,category:"Home & Kitchen",emoji:"🍽️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:102,name:"Storage Containers",unit:"3 pcs",price:249,old:299,category:"Home & Kitchen",emoji:"🥡",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:103,name:"Water Bottle",unit:"1 litre",price:149,old:179,category:"Home & Kitchen",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:104,name:"Kitchen Towel",unit:"2 pcs",price:99,old:119,category:"Home & Kitchen",emoji:"🧻",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:105,name:"Lunch Box",unit:"1 pc",price:199,old:239,category:"Home & Kitchen",emoji:"🍱",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:106,name:"Notebook",unit:"1 pc",price:55,old:69,category:"Stationery & Office",emoji:"📓",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:107,name:"Ball Pens",unit:"10 pcs",price:60,old:75,category:"Stationery & Office",emoji:"🖊️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:108,name:"Pencils",unit:"10 pcs",price:35,old:45,category:"Stationery & Office",emoji:"✏️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:109,name:"A4 Paper",unit:"500 sheets",price:299,old:349,category:"Stationery & Office",emoji:"📄",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:110,name:"Sticky Notes",unit:"1 pack",price:49,old:59,category:"Stationery & Office",emoji:"🗒️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:111,name:"Digital Thermometer",unit:"1 pc",price:199,old:249,category:"Health & Wellness",emoji:"🌡️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:112,name:"Cotton Balls",unit:"100 pcs",price:59,old:69,category:"Health & Wellness",emoji:"☁️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:113,name:"Bandage Strips",unit:"1 pack",price:45,old:55,category:"Health & Wellness",emoji:"🩹",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:114,name:"Hand Sanitizer",unit:"500 ml",price:119,old:139,category:"Health & Wellness",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:115,name:"Hot Water Bag",unit:"1 pc",price:249,old:299,category:"Health & Wellness",emoji:"♨️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:116,name:"Face Wash",unit:"100 ml",price:129,old:149,category:"Beauty & Cosmetics",emoji:"🫧",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:117,name:"Sunscreen",unit:"50 g",price:249,old:299,category:"Beauty & Cosmetics",emoji:"☀️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:118,name:"Lip Balm",unit:"1 pc",price:99,old:119,category:"Beauty & Cosmetics",emoji:"💋",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:119,name:"Face Moisturizer",unit:"100 ml",price:199,old:229,category:"Beauty & Cosmetics",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:120,name:"Hair Serum",unit:"100 ml",price:179,old:209,category:"Beauty & Cosmetics",emoji:"✨",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:121,name:"Organic Honey",unit:"500 g",price:249,old:299,category:"Organic & Health Foods",emoji:"🍯",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:122,name:"Chia Seeds",unit:"200 g",price:149,old:179,category:"Organic & Health Foods",emoji:"🌱",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:123,name:"Flax Seeds",unit:"200 g",price:99,old:119,category:"Organic & Health Foods",emoji:"🌾",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:124,name:"Quinoa",unit:"500 g",price:229,old:269,category:"Organic & Health Foods",emoji:"🥣",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:125,name:"Jaggery Powder",unit:"500 g",price:79,old:95,category:"Organic & Health Foods",emoji:"🟤",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:126,name:"Instant Poha",unit:"1 pack",price:45,old:55,category:"Ready to Eat",emoji:"🥣",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:127,name:"Ready Dal Makhani",unit:"300 g",price:99,old:119,category:"Ready to Eat",emoji:"🍛",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:128,name:"Instant Noodles",unit:"4 pack",price:60,old:72,category:"Ready to Eat",emoji:"🍜",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:129,name:"Pasta Meal Kit",unit:"1 pack",price:129,old:149,category:"Ready to Eat",emoji:"🍝",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:130,name:"Breakfast Oats Cup",unit:"1 cup",price:59,old:69,category:"Ready to Eat",emoji:"🥣",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:131,name:"Turmeric Powder",unit:"200 g",price:55,old:65,category:"Spices & Masalas",emoji:"🟡",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:132,name:"Red Chilli Powder",unit:"200 g",price:79,old:95,category:"Spices & Masalas",emoji:"🌶️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:133,name:"Garam Masala",unit:"100 g",price:69,old:85,category:"Spices & Masalas",emoji:"🫙",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:134,name:"Cumin Seeds",unit:"100 g",price:49,old:59,category:"Spices & Masalas",emoji:"🌿",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:135,name:"Coriander Powder",unit:"200 g",price:59,old:69,category:"Spices & Masalas",emoji:"🫙",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:136,name:"Tomato Ketchup",unit:"500 g",price:99,old:119,category:"Sauces & Spreads",emoji:"🍅",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:137,name:"Peanut Butter",unit:"340 g",price:199,old:229,category:"Sauces & Spreads",emoji:"🥜",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:138,name:"Mixed Fruit Jam",unit:"500 g",price:149,old:179,category:"Sauces & Spreads",emoji:"🍓",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:139,name:"Mayonnaise",unit:"250 g",price:89,old:109,category:"Sauces & Spreads",emoji:"🥫",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:140,name:"Green Chilli Sauce",unit:"200 g",price:65,old:79,category:"Sauces & Spreads",emoji:"🌶️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:141,name:"Agarbatti",unit:"1 pack",price:35,old:45,category:"Pooja & Festival",emoji:"🪔",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:142,name:"Cotton Wicks",unit:"1 pack",price:25,old:30,category:"Pooja & Festival",emoji:"🕯️",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:143,name:"Camphor",unit:"50 g",price:59,old:69,category:"Pooja & Festival",emoji:"✨",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:144,name:"Diyas",unit:"6 pcs",price:49,old:59,category:"Pooja & Festival",emoji:"🪔",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:145,name:"Pooja Oil",unit:"500 ml",price:99,old:119,category:"Pooja & Festival",emoji:"🪔",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:146,name:"Baby Soap",unit:"1 bar",price:65,old:79,category:"Baby Care",emoji:"🧼",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:147,name:"Baby Powder",unit:"200 g",price:99,old:119,category:"Baby Care",emoji:"🍼",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:148,name:"Baby Shampoo",unit:"200 ml",price:129,old:149,category:"Baby Care",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:149,name:"Baby Feeding Bottle",unit:"1 pc",price:179,old:219,category:"Baby Care",emoji:"🍼",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:150,name:"Baby Oil",unit:"200 ml",price:149,old:179,category:"Baby Care",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:151,name:"Toilet Cleaner",unit:"500 ml",price:99,old:119,category:"Cleaning & Laundry",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:152,name:"Glass Cleaner",unit:"500 ml",price:89,old:109,category:"Cleaning & Laundry",emoji:"🪟",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:153,name:"Fabric Softener",unit:"1 litre",price:149,old:179,category:"Cleaning & Laundry",emoji:"🫧",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:154,name:"Scrub Pad",unit:"3 pcs",price:35,old:45,category:"Cleaning & Laundry",emoji:"🧽",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:155,name:"Disinfectant Liquid",unit:"500 ml",price:119,old:139,category:"Cleaning & Laundry",emoji:"🧴",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:156,name:"Frozen Chicken Nuggets",unit:"500 g",price:199,old:229,category:"Seafood & Frozen Meat",emoji:"🍗",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:157,name:"Fish Fingers",unit:"250 g",price:179,old:209,category:"Seafood & Frozen Meat",emoji:"🐟",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:158,name:"Frozen Prawns",unit:"250 g",price:229,old:259,category:"Seafood & Frozen Meat",emoji:"🦐",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:159,name:"Chicken Sausages",unit:"250 g",price:149,old:179,category:"Seafood & Frozen Meat",emoji:"🌭",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:160,name:"Frozen Fish Fillet",unit:"400 g",price:249,old:289,category:"Seafood & Frozen Meat",emoji:"🐟",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:161,name:"Soya Sauce",unit:"200 ml",price:69,old:85,category:"Regional & International Foods",emoji:"🥢",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:162,name:"Rice Noodles",unit:"400 g",price:99,old:119,category:"Regional & International Foods",emoji:"🍜",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:163,name:"Tortilla Wraps",unit:"6 pcs",price:89,old:109,category:"Regional & International Foods",emoji:"🫓",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:164,name:"Coconut Milk",unit:"400 ml",price:99,old:119,category:"Regional & International Foods",emoji:"🥥",tag:'New arrival',rating:4.6,color:'#eef2e8'},
  {id:165,name:"Sushi Rice",unit:"500 g",price:179,old:209,category:"Regional & International Foods",emoji:"🍚",tag:'New arrival',rating:4.6,color:'#eef2e8'},
];
const categories = [{name:"All",emoji:"🛒"}, {name:"Fruits",emoji:"🍎"}, {name:"Vegetables",emoji:"🥦"}, {name:"Dairy & Eggs",emoji:"🥛"}, {name:"Bakery",emoji:"🥐"}, {name:"Snacks",emoji:"🥜"}, {name:"Staples & Grains",emoji:"🌾"}, {name:"Beverages",emoji:"🧃"}, {name:"Personal Care",emoji:"🧴"}, {name:"Household",emoji:"🧽"}, {name:"Meat & Seafood",emoji:"🐟"}, {name:"Frozen Foods",emoji:"🍨"}, {name:"Baby & Kids",emoji:"🍼"}, {name:"Pet Supplies",emoji:"🐾"}, {name:"Home & Kitchen",emoji:"🍽️"}, {name:"Stationery & Office",emoji:"✏️"}, {name:"Health & Wellness",emoji:"💊"}, {name:"Beauty & Cosmetics",emoji:"💄"}, {name:"Organic & Health Foods",emoji:"🌱"}, {name:"Ready to Eat",emoji:"🍱"}, {name:"Spices & Masalas",emoji:"🌶️"}, {name:"Sauces & Spreads",emoji:"🥫"}, {name:"Pooja & Festival",emoji:"🪔"}, {name:"Baby Care",emoji:"🧸"}, {name:"Cleaning & Laundry",emoji:"🧹"}, {name:"Seafood & Frozen Meat",emoji:"🦐"}, {name:"Regional & International Foods",emoji:"🌏"}];
const money = n => `₹${n.toLocaleString('en-IN')}`;

function App(){
 const [category,setCategory]=useState('All'); const [query,setQuery]=useState(''); const [cart,setCart]=useState({}); const [cartOpen,setCartOpen]=useState(false); const [liked,setLiked]=useState([]); const [sort,setSort]=useState('featured'); const [notice,setNotice]=useState(''); const [mobileMenu,setMobileMenu]=useState(false); const [checkout,setCheckout]=useState(false);
 const visible=useMemo(()=>{let list=products.filter(p=>(category==='All'||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase())); if(sort==='low')list.sort((a,b)=>a.price-b.price); if(sort==='high')list.sort((a,b)=>b.price-a.price); if(sort==='rating')list.sort((a,b)=>b.rating-a.rating); return list;},[category,query,sort]);
 const count=Object.values(cart).reduce((a,b)=>a+b,0); const subtotal=products.reduce((s,p)=>s+p.price*(cart[p.id]||0),0); const delivery=subtotal===0||subtotal>=499?0:30; const total=subtotal+delivery;
 const add=(id)=>{setCart(c=>({...c,[id]:(c[id]||0)+1})); const p=products.find(x=>x.id===id); setNotice(`${p.name} added to basket`); setTimeout(()=>setNotice(''),1900)};
 const change=(id,d)=>setCart(c=>{const n={...c,[id]:Math.max(0,(c[id]||0)+d)};if(!n[id])delete n[id];return n});
 const scrollProducts=()=>document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});
 return <div className="site">
  <div className="topline"><span><Sparkles size={13}/> Fresh picks, fair prices — every single day</span><span className="top-right"><MapPin size={13}/> Delivering to <b>Vijayawada</b><ChevronDown size={13}/></span></div>
  <header className="header"><a className="brand" href="#top"><span className="brand-mark"><Leaf size={24}/></span><span>fresh<span className="brand-green">mart</span><small>GOOD FOOD. GOOD MOOD.</small></span></a>
   <div className="search"><Search size={18}/><input value={query} onChange={e=>{setQuery(e.target.value);scrollProducts()}} placeholder="Search for fruits, vegetables, milk..."/><kbd>⌘ K</kbd></div>
   <div className="header-actions"><button className="location-btn"><MapPin size={17}/><span><small>Deliver to</small><b>Vijayawada</b></span><ChevronDown size={14}/></button><button className="basket-btn" onClick={()=>setCartOpen(true)}><ShoppingBasket size={19}/><span>My Basket</span><i>{count}</i></button><button className="menu-btn" onClick={()=>setMobileMenu(!mobileMenu)}><Menu/></button></div>
  </header>
  {mobileMenu&&<div className="mobile-nav"><button onClick={()=>{setCategory('All');setMobileMenu(false);scrollProducts()}}>Shop all</button><button onClick={()=>{setCategory('Fruits');setMobileMenu(false);scrollProducts()}}>Fruits</button><button onClick={()=>{setCategory('Vegetables');setMobileMenu(false);scrollProducts()}}>Vegetables</button></div>}
  <nav className="nav"><div className="nav-inner"><button className="active" onClick={()=>{setCategory('All');scrollProducts()}}>Shop all</button>{categories.slice(1,8).map(c=><button key={c.name} onClick={()=>{setCategory(c.name);scrollProducts()}}>{c.name}</button>)}<span className="nav-deal"> <span>✦</span> Weekly offers</span></div></nav>
  <main id="top">
   <section className="hero"><div className="hero-copy"><div className="eyebrow"><span/> FRESHNESS AT YOUR DOORSTEP</div><h1>Good food.<br/><em>Great days.</em></h1><p>From farm-fresh produce to everyday essentials, bring home the good stuff without stepping out.</p><div className="hero-buttons"><button className="primary" onClick={scrollProducts}>Shop fresh picks <ArrowRight size={17}/></button><div className="delivery-note"><span className="delivery-icon"><Truck size={18}/></span><span><b>30-minute delivery</b><small>On orders above ₹199</small></span></div></div><div className="hero-rating"><div className="avatars"><span>👩🏻</span><span>👨🏽</span><span>👩🏾</span></div><div><div className="stars">★★★★★ <b>4.9/5</b></div><small>Loved by 12,000+ happy homes</small></div></div></div>
    <div className="hero-art"><div className="hero-circle"></div><div className="hero-label label-one">🥬 100% fresh picks</div><div className="hero-label label-two">🌱 Farm to your home</div><div className="produce-bowl"><div className="fruit f1">🥑</div><div className="fruit f2">🍊</div><div className="fruit f3">🍎</div><div className="fruit f4">🥦</div><div className="fruit f5">🍋</div><div className="fruit f6">🍅</div><div className="leaf-deco">✦</div></div><div className="hero-sticker">FRESH<br/><b>DAILY</b></div></div>
   </section>
   <section className="benefits"><div><span><Truck/></span><p><b>Free delivery</b><small>On orders above ₹499</small></p></div><div><span><ShieldCheck/></span><p><b>Quality guaranteed</b><small>Freshness you can trust</small></p></div><div><span><Clock3/></span><p><b>Quick delivery</b><small>At your preferred time</small></p></div><div><span><Headphones/></span><p><b>Here to help</b><small>Friendly customer support</small></p></div></section>
   <section className="shop-section" id="shop"><div className="section-heading"><div><div className="eyebrow">THE GOOD STUFF</div><h2>Shop your favourites<span>.</span></h2><p>Handpicked freshness for every shelf and every craving.</p></div><div className="sort-wrap"><span>Sort by</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></div></div>
    <div className="category-row">{categories.map(c=><button key={c.name} className={category===c.name?'selected':''} onClick={()=>setCategory(c.name)}><span>{c.emoji}</span>{c.name}</button>)}</div>
    <div className="product-meta"><b>{category==='All'?'Popular right now':category}</b><span>{visible.length} products</span></div>
    <div className="products">{visible.map(p=><article className="product-card" key={p.id}><div className="product-image" style={{background:p.color}}><span className="product-emoji">{p.emoji}</span>{p.tag&&<span className="tag">{p.tag}</span>}<button className={`heart ${liked.includes(p.id)?'liked':''}`} onClick={()=>setLiked(l=>l.includes(p.id)?l.filter(x=>x!==p.id):[...l,p.id])}><Heart size={17} fill={liked.includes(p.id)?'currentColor':'none'}/></button></div><div className="product-info"><div className="rating"><Star size={12} fill="currentColor"/> {p.rating}</div><h3>{p.name}</h3><small>{p.unit}</small><div className="product-bottom"><div><b>{money(p.price)}</b><del>{money(p.old)}</del></div>{cart[p.id]?<div className="quantity"><button onClick={()=>change(p.id,-1)}><Minus size={14}/></button><b>{cart[p.id]}</b><button onClick={()=>change(p.id,1)}><Plus size={14}/></button></div>:<button className="add-btn" onClick={()=>add(p.id)}><Plus size={15}/> Add</button>}</div></div></article>)}</div>
    {visible.length===0&&<div className="empty"><span>🥕</span><h3>No products found</h3><p>Try another search or browse all products.</p><button className="primary" onClick={()=>{setQuery('');setCategory('All')}}>Show all products</button></div>}
   </section>
   <section className="promo"><div><span className="promo-kicker">A LITTLE SOMETHING EXTRA</span><h2>Stock up. Save more.</h2><p>Get ₹100 off your first order above ₹799. Fresh beginnings start here.</p><button onClick={scrollProducts}>Explore the offer <ArrowRight size={16}/></button></div><div className="promo-art"><span>🛍️</span><b>₹100<br/>OFF</b><i>YOUR FIRST ORDER</i></div></section>
   <section className="newsletter"><div><span className="eyebrow">THE FRESH LETTER</span><h2>A fresh note in your inbox.</h2><p>Seasonal picks, kitchen inspiration and offers worth opening.</p></div><form onSubmit={e=>{e.preventDefault();setNotice('Thanks for subscribing!');e.target.reset();setTimeout(()=>setNotice(''),2200)}}><input type="email" placeholder="Your email address" required/><button>Subscribe <ArrowRight size={16}/></button></form></section>
  </main>
  <footer><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><Leaf size={24}/></span><span>fresh<span className="brand-green">mart</span><small>GOOD FOOD. GOOD MOOD.</small></span></a><p>Making everyday grocery shopping a little fresher, simpler and happier.</p></div><div><b>Explore</b><a href="#shop">Shop all</a><a href="#shop">Fresh fruits</a><a href="#shop">Vegetables</a></div><div><b>Help & support</b><a href="#top">Delivery information</a><a href="#top">Returns & refunds</a><a href="#top">Contact us</a></div><div><b>Stay connected</b><p className="footer-small">Made with care for fresh-loving homes.</p><div className="socials"><span>ig</span><span>f</span><span>in</span></div></div><div className="copyright">© 2026 FreshMart. Demo storefront built for learning and portfolio use. <span>Privacy · Terms</span></div></footer>
  {notice&&<div className="toast"><CheckCircle2 size={17}/>{notice}</div>}
  {cartOpen&&<div className="overlay" onClick={()=>setCartOpen(false)}><aside className="cart-panel" onClick={e=>e.stopPropagation()}><div className="cart-head"><div><span className="eyebrow">YOUR GOODIES</span><h2>My basket <small>({count} items)</small></h2></div><button className="close" onClick={()=>setCartOpen(false)}><X/></button></div>{count===0?<div className="cart-empty"><span>🧺</span><h3>Your basket is waiting</h3><p>Add a few fresh favourites to get started.</p><button className="primary" onClick={()=>setCartOpen(false)}>Explore products</button></div>:<><div className="free-delivery">{subtotal>=499?'🎉 You unlocked free delivery!':`Add ${money(499-subtotal)} more for free delivery` }<div><span style={{width:`${Math.min(100,subtotal/499*100)}%`}}/></div></div><div className="cart-items">{products.filter(p=>cart[p.id]).map(p=><div className="cart-item" key={p.id}><div className="cart-emoji" style={{background:p.color}}>{p.emoji}</div><div className="cart-detail"><b>{p.name}</b><small>{p.unit} · {money(p.price)}</small><div className="quantity"><button onClick={()=>change(p.id,-1)}><Minus size={13}/></button><b>{cart[p.id]}</b><button onClick={()=>change(p.id,1)}><Plus size={13}/></button></div></div><strong>{money(p.price*cart[p.id])}</strong><button className="remove" onClick={()=>change(p.id,-cart[p.id])}><Trash2 size={15}/></button></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><b>{money(subtotal)}</b></div><div><span>Delivery</span><b>{delivery===0?'FREE':money(delivery)}</b></div><div className="grand-total"><span>Total</span><b>{money(total)}</b></div><button className="checkout" onClick={()=>setCheckout(true)}>Continue to checkout <ArrowRight size={17}/></button><small className="demo-note">Demo checkout — no payment will be collected.</small></div></>}</aside></div>}
  {checkout&&<div className="overlay modal-overlay" onClick={()=>setCheckout(false)}><div className="checkout-modal" onClick={e=>e.stopPropagation()}><button className="close modal-close" onClick={()=>setCheckout(false)}><X/></button><div className="success-icon"><CheckCircle2 size={30}/></div><h2>You're one step away!</h2><p>This is a portfolio demo. Checkout and payment integration can be connected in a future version.</p><div className="modal-total">Order total <b>{money(total)}</b></div><button className="primary" onClick={()=>{setCheckout(false);setCartOpen(false)}}>Continue browsing</button></div></div>}
 </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
