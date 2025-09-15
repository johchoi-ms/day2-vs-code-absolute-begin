// Research Data for Mobile Checkout Study
// This represents realistic findings from user interviews

const researchData = {
  participants: [
    {
      id: "P01",
      type: "New User",
      age: 28,
      primaryIssue: "Payment Method Confusion",
      quote: "I couldn't figure out if my card was already saved or if I needed to enter it again. The buttons looked the same."
    },
    {
      id: "P02", 
      type: "Returning User",
      age: 35,
      primaryIssue: "Shipping Address Edit",
      quote: "I moved last month but couldn't find where to change my address. I almost gave up and didn't buy anything."
    },
    {
      id: "P03",
      type: "New User", 
      age: 42,
      primaryIssue: "Order Review Clarity",
      quote: "Wait, what am I actually buying? I can see the price but where are the product images?"
    },
    {
      id: "P04",
      type: "Power User",
      age: 31,
      primaryIssue: "Confirmation Uncertainty", 
      quote: "I pressed 'Complete Order' but nothing happened for like 10 seconds. Did it work? Should I press it again?"
    },
    {
      id: "P05",
      type: "New User",
      age: 24, 
      primaryIssue: "Payment Method Confusion",
      quote: "There were like 4 different payment buttons and I wasn't sure which one to use. Very confusing."
    },
    {
      id: "P06",
      type: "Returning User",
      age: 39,
      primaryIssue: "Order Review Clarity",
      quote: "I wanted to double-check what I was ordering but the summary was just text. Show me pictures!"
    }
  ],

  findings: [
    {
      title: "Payment Method Selection Confusion",
      severity: "High", 
      affectedUsers: "8 out of 12",
      description: "Users struggled to understand the difference between saved payment methods, new card entry, and guest checkout options.",
      impact: "Cart abandonment, user frustration",
      recommendation: "Simplify payment flow with clearer visual hierarchy and labels"
    },
    {
      title: "Hidden Shipping Address Edit",
      severity: "Medium",
      affectedUsers: "5 out of 12", 
      description: "The edit shipping address option was buried in a sub-menu that users couldn't locate easily.",
      impact: "Incorrect deliveries, user frustration",
      recommendation: "Make address editing more prominent in the checkout flow"
    },
    {
      title: "Order Review Lacks Visual Context", 
      severity: "High",
      affectedUsers: "10 out of 12",
      description: "Order summary showed only product names and prices, no images or descriptions for final verification.",
      impact: "Reduced confidence in purchase, potential returns",
      recommendation: "Add product thumbnails and key details to order review"
    },
    {
      title: "Unclear Order Confirmation",
      severity: "High", 
      affectedUsers: "7 out of 12",
      description: "After clicking 'Complete Order', users experienced loading delays with no feedback about order status.",
      impact: "Duplicate orders, user anxiety, support tickets",
      recommendation: "Implement clear loading states and immediate confirmation feedback"
    }
  ],

  painPoints: [
    {
      stage: "Payment Selection",
      description: "Multiple similar-looking buttons create decision paralysis",
      userQuote: "I couldn't figure out if my card was already saved or if I needed to enter it again.",
      frequency: "8/12 users"
    },
    {
      stage: "Address Management", 
      description: "Edit functionality hidden and hard to discover",
      userQuote: "I moved last month but couldn't find where to change my address.",
      frequency: "5/12 users"
    },
    {
      stage: "Order Review",
      description: "Text-only summary reduces purchase confidence", 
      userQuote: "Wait, what am I actually buying? I can see the price but where are the product images?",
      frequency: "10/12 users"
    },
    {
      stage: "Confirmation",
      description: "Lack of loading feedback creates uncertainty",
      userQuote: "I pressed 'Complete Order' but nothing happened for like 10 seconds. Did it work?",
      frequency: "7/12 users"
    }
  ],

  recommendations: [
    {
      priority: "P0",
      title: "Redesign Payment Method Selection",
      description: "Create clear visual distinction between payment options with consistent labeling",
      effort: "Medium", 
      impact: "High",
      timeline: "2 weeks"
    },
    {
      priority: "P0", 
      title: "Add Visual Order Review",
      description: "Include product thumbnails, descriptions, and quantities in final order summary",
      effort: "Low",
      impact: "High", 
      timeline: "1 week"
    },
    {
      priority: "P1",
      title: "Implement Loading States",
      description: "Show clear progress indicators and confirmation messages during order processing",
      effort: "Low",
      impact: "Medium",
      timeline: "3 days"
    },
    {
      priority: "P2",
      title: "Improve Address Management", 
      description: "Make shipping address editing more discoverable in checkout flow",
      effort: "Medium",
      impact: "Medium",
      timeline: "1 week"
    }
  ]
};

// Export data for use in main application
window.researchData = researchData;