# 🔍 Mystery Data Points
### K-Means Clustering — Visual Activity & Hand-Clustering Worksheet

---

**Name:** _________________________________  **Date:** ________________  **Period:** _______

---

## Part 1: Background — What Is Clustering?

In **supervised learning**, we train a model using labeled data (like "happy" and "not happy").  
But what if we **don't have labels**? What if we have thousands of data points and no one has told us what they mean?

That's where **unsupervised learning** comes in — and **K-means clustering** is one of the most popular techniques.

The idea: Given a set of data points, find natural **groups (clusters)** based on how similar the points are to each other. The "K" in K-means is how many groups you want to find.

---

## Part 2: The Mystery Data Grid

Below is a scatter plot with **24 mystery data points** plotted on a grid. Each point represents something — but you don't know what yet.

**Your job:** Group these points into clusters that seem to "belong" together.

---

```
    10 |                    ★          
       |              ★        ★       
     9 |         ★                     
       |    ★         ★                
     8 |              ★           ●    
       |                      ●    ●   
     7 |                   ●    ●      
       |                      ●       
     6 |    ▲    ▲                     
       |  ▲    ▲    ▲                  
     5 |    ▲         ▲                
       |         ▲                     
     4 |                               
       |                      ◆    ◆  
     3 |                   ◆          
       |              ◆    ◆           
     2 |                   ◆          
       |                               
     1 |                               
       +--+--+--+--+--+--+--+--+--+--+
         1  2  3  4  5  6  7  8  9  10
```

**Symbol Reference:**
- ★ Stars: 6 points
- ● Circles: 6 points  
- ▲ Triangles: 6 points
- ◆ Diamonds: 6 points

---

## Part 3: Coordinate Table

Here are the exact coordinates of each point:

| Point | Symbol | X | Y |
|-------|--------|---|---|
| 1 | ★ | 7 | 10 |
| 2 | ★ | 6 | 9.5 |
| 3 | ★ | 8 | 9.5 |
| 4 | ★ | 5 | 9 |
| 5 | ★ | 6 | 8.5 |
| 6 | ★ | 7 | 8.5 |
| 7 | ● | 8 | 8 |
| 8 | ● | 9 | 7.5 |
| 9 | ● | 8.5 | 7.5 |
| 10 | ● | 9 | 7 |
| 11 | ● | 8.5 | 6.5 |
| 12 | ● | 9.5 | 8 |
| 13 | ▲ | 2 | 6 |
| 14 | ▲ | 3 | 6 |
| 15 | ▲ | 1.5 | 5.5 |
| 16 | ▲ | 2.5 | 5.5 |
| 17 | ▲ | 3.5 | 5.5 |
| 18 | ▲ | 2 | 5 |
| 19 | ▲ | 3 | 5 |
| 20 | ▲ | 2.5 | 4.5 |  *(outlier!)*|
| 21 | ◆ | 7 | 4 |
| 22 | ◆ | 8 | 4 |
| 23 | ◆ | 6.5 | 3 |
| 24 | ◆ | 7.5 | 3 |

---

## Part 4: Hand-Clustering Worksheet

### Round 1: Your Instinct (No Math!)

Just by looking at the scatter plot, draw circles around what you think are the natural groups.

**How many groups did you identify?** _______

**Describe each group's location:**
- Group 1: ___________________________________________________
- Group 2: ___________________________________________________
- Group 3: ___________________________________________________
- Group 4: ___________________________________________________

---

### Round 2: K-Means Step-by-Step (K = 2)

Let's try the K-means algorithm manually with **K = 2** clusters.

**Step 1: Place your centroids** (starting guesses for cluster centers)
- Centroid A starting position: ( ______ , ______ ) — pick any point
- Centroid B starting position: ( ______ , ______ ) — pick a different point

**Step 2: Assign each point to the nearest centroid**

For each point, calculate which centroid it's closer to. Write **A** or **B** in the column.

| Point | X | Y | Closer to A or B? |
|-------|---|---|-------------------|
| 1 | 7 | 10 | |
| 2 | 6 | 9.5 | |
| 3 | 8 | 9.5 | |
| 7 | 8 | 8 | |
| 13 | 2 | 6 | |
| 14 | 3 | 6 | |
| 21 | 7 | 4 | |
| 22 | 8 | 4 | |

**Step 3: Recalculate centroids**  
Find the average X and Y for all points in each cluster.

- New Centroid A: ( ______ , ______ )
- New Centroid B: ( ______ , ______ )

**Did the centroids move?** ______ (yes/no)

If yes, **repeat Steps 2 and 3** until the centroids stop moving. That's convergence!

---

### Round 3: Try K = 4

Now try again with K = 4 (four cluster centers).

**Starting centroids:**
- Centroid 1: ( ______ , ______ )
- Centroid 2: ( ______ , ______ )
- Centroid 3: ( ______ , ______ )
- Centroid 4: ( ______ , ______ )

After one round of assignment:
- Cluster 1 contains points: _________________________________
- Cluster 2 contains points: _________________________________
- Cluster 3 contains points: _________________________________
- Cluster 4 contains points: _________________________________

---

## Part 5: Analysis Questions

**Q1.** When you ran K-means with K=2, you got two big clusters. When you ran with K=4, you got four smaller clusters. **Which result felt more "natural"?** Why?

_________________________________________________________________________

_________________________________________________________________________

**Q2.** How do you choose the right value of K? (There's no single right answer — discuss!)

_________________________________________________________________________

_________________________________________________________________________

**Q3.** Notice Point #20 (▲ at 2.5, 4.5) — it's a bit separated from the other triangles. In K-means, this point might end up in a different cluster. What might this tell us?

_________________________________________________________________________

_________________________________________________________________________

**Q4.** K-means is an **unsupervised** algorithm. That means it doesn't use labels. After clustering, how would you figure out what each cluster **means** or represents?

_________________________________________________________________________

_________________________________________________________________________

**Q5.** Real-world application: Imagine these 24 data points represent customers at a store, with X = "how often they visit" and Y = "how much they spend per visit." What would each cluster tell a business?

_________________________________________________________________________

_________________________________________________________________________

---

## Big Reveal!

*(Your teacher will reveal what these data points actually represent after the activity.)*

**After the reveal, did your clusters match the actual groups?**  _______ 

What surprised you? ___________________________________________________

---

*Module 4 — AI & Machine Learning Foundations | openclaw-curriculum*
