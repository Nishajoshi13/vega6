import { Component } from '@angular/core';

interface cards{
  desc:string;
  img:string;
 }
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
  cards:cards[] = [
    {
      desc:'Alex Soltan Is Making $23,000 Per Month Selling AI-Generated Ebooks…',
      img: '/assets/home/card1.png',
      
    },
    {
      desc:'Another Guy Has Made Over $1.63 Million By Selling AI-Generated Ebooks On Amazon…',
      img: '/assets/home/card2.png',
    },
    {
      desc:'This Guy Made An AI Chatbot That Makes Him $350,000 Each Year…',
      img: '/assets/home/card3.png',
    },
    {
      desc:'Jason Wardrop Sells AI Services Like Images, Videos, And Content To Local Businesses And Makes $19K/Month',
      img: '/assets/home/card4.png',
    },
    {
      desc:'This Guy Went From 0 To 56K Clicks In 3 Months Using AI Content (2025 Blog Case Study)',
      img: '/assets/home/card5.png',
    },
    {
      desc:'This Guy Started And Scaled His AI Agency To $122,351 Just To Prove It’s NOT Luck…',
      img: '/assets/home/card6.png',
    },
  ];

  liveWorkshopPoints = [
    `How to create your first profit-genearting AI marketing Campaign in under 15 minutes(even if you're completely non-technical).`,
    `The "5-Minute Method" for turning any product or service into a
          complete marketing system that generates leads while you sleep.`,
    `Why most businesses waste 80% of their marketing budget (and how AI
          Sellers eliminates this waste completely).`,
    ` The exact process of landing $1500-2500/ month retainer clients using
          nothing but AISellers demons.`,
    ` Plus, a chance to win a free copy of AISellers+$150 in credits and
          exclusive AI launch bonuses.`
  ]
}
