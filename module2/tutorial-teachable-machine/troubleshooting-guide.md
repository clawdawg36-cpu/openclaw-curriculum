# Teachable Machine Troubleshooting Guide

Common problems, clear fixes. No fluff.

---

## Issue 1: Camera Won't Turn On / Access Denied

**Symptom:** Clicking "Webcam" shows a blank screen or a permission error.

**Fixes:**
- **Check browser permissions:** Click the camera icon in your browser's address bar → set camera to "Allow"
- **Try a different browser:** Teachable Machine works best in Chrome or Edge. Firefox can be finicky with camera access.
- **HTTPS required:** If you're accessing the site over HTTP (not HTTPS), camera access is blocked by modern browsers. Use the official URL: `https://teachablemachine.withgoogle.com`
- **Close other apps using the camera:** Zoom, Teams, FaceTime — anything that might be holding the camera. Only one app can use the camera at a time on most systems.
- **Restart your browser** after changing permissions.

---

## Issue 2: Model Is Terrible — Everything Predicts as One Class

**Symptom:** No matter what you show the camera, one class always wins (90%+).

**Cause:** Class imbalance. One class has way more samples than the others.

**Fixes:**
- Count your samples per class — they should be roughly equal
- Add more samples to the underrepresented classes
- Delete some samples from the overrepresented class if needed
- Re-train after balancing

> Rule of thumb: ±20% variance between classes is fine. 3x or more is a problem.

---

## Issue 3: Low Confidence / Predictions Keep Flickering

**Symptom:** Confidence bars are always in the 40–60% range, or they switch rapidly between classes.

**Cause:** Not enough samples, or samples are too similar between classes.

**Fixes:**
- Add more samples — especially in different lighting and angles
- Make sure your classes are visually distinct (your model can't learn what your eyes can't see)
- Reduce background clutter — a messy background confuses the model
- Ensure consistent lighting when capturing; avoid shadows and glare
- Try to hold the object/gesture the same way each time during capture

---

## Issue 4: Training Freezes or Stalls at a Percentage

**Symptom:** The training progress bar stops moving, stuck at 50% or some other value.

**Fixes:**
- **Wait longer** — large datasets genuinely take a while, especially on slower machines. Give it 5 minutes before panicking.
- **Don't switch browser tabs** during training — this can throttle the JavaScript and slow or pause training
- **Refresh and try again** — sometimes the browser just glitches
- **Reduce sample count** — if you have 500+ images per class, try training with 100–150 first to verify it works, then add more
- **Try Chrome** — it has the best JavaScript performance for TensorFlow.js

---

## Issue 5: "Export Model" Button is Grayed Out or Missing

**Symptom:** After training, the Export button isn't clickable or doesn't appear.

**Fixes:**
- The model must finish training completely before export is available — wait for the "Done" confirmation
- Scroll right or resize your window — on smaller screens the Preview panel may be partially hidden
- Try zooming out (Ctrl/Cmd + minus) to see the full interface
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R) — then re-train

---

## Issue 6: Uploaded Model URL Returns 404 or Stops Working

**Symptom:** Your model URL (e.g., `https://teachablemachine.withgoogle.com/models/XXXX/`) gives a 404 or "model not found" error.

**Fixes:**
- **Check the URL carefully** — missing a character or extra space breaks it
- **Models expire if not re-uploaded** — Teachable Machine hosted models may expire after extended inactivity. Re-export and upload again.
- **Use "Download my model" as backup** — always keep a local copy of your `model.json` and `.bin` files. Cloud links can break; local files don't.
- If your URL contains `/model.json`, make sure you're pointing to the directory, not the file directly (depends on how you're loading it)

---

## Issue 7: Model Works in Teachable Machine but Breaks When Embedded

**Symptom:** The preview in Teachable Machine looks great, but when you load the model URL in your own project, it fails or gives wrong predictions.

**Fixes:**
- Make sure you're loading both `model.json` AND `metadata.json` from the same directory
- Check for CORS errors in the browser console (F12 → Console tab) — this means your page can't access the model URL
- If self-hosting, serve files from a proper web server (not by opening HTML files directly from Finder/Explorer)
- Confirm you're using the correct TensorFlow.js version — Teachable Machine models work with `@tensorflow-models/teachablemachine-image`
- Test with the exact code snippet from Teachable Machine's export dialog first before customizing

---

## Issue 8: Webcam Preview Is Very Slow / Laggy

**Symptom:** The live camera preview in the Teachable Machine interface is choppy or delayed.

**Fixes:**
- Close other browser tabs — TensorFlow.js is CPU/GPU intensive
- Close other applications consuming CPU or GPU resources
- Lower your screen resolution temporarily
- Try a different browser — Chrome typically performs best for WebGL acceleration
- If you have a dedicated GPU, ensure your browser is using it (check `chrome://settings/system` → "Use hardware acceleration when available")
- Reduce the number of open browser extensions — some (especially screen recorders) interfere

---

## Issue 9: Can't Add More Than X Images / Upload Fails

**Symptom:** Uploading images fails, shows an error, or only some images appear.

**Fixes:**
- **File size:** Very large images (>5MB each) can cause issues. Resize to 640×480 or similar before uploading.
- **File count:** Some browsers struggle with bulk-selecting hundreds of files at once. Try uploading in batches of 20–30.
- **File format:** Stick to JPG or PNG. WebP and HEIC may not be supported.
- **Browser storage:** If your browser's localStorage or IndexedDB is full, it can't store new samples. Clear browser data for the site (not your whole browser history) and try again.
- **Private/incognito mode:** Some browsers restrict storage in private mode. Use a regular window.

---

## Issue 10: Model Doesn't Work Well in Different Lighting or Locations

**Symptom:** Model is highly accurate at your desk but fails completely in a different room or lighting condition.

**Cause:** The model "memorized" your training environment rather than learning the actual features you care about.

**Fixes:**
- **Capture in multiple environments** — train samples in different rooms, with different lighting, at different times of day
- **Include negative examples** — if you're classifying objects, include background-only samples as a "nothing" class
- **Use varied backgrounds** — capture against plain walls, cluttered backgrounds, dark backgrounds, bright backgrounds
- **Augment manually** — take photos at different distances (close, medium, far) and angles (front, 45°, side)
- **Re-train with the expanded dataset** — this is normal. Real ML models go through multiple rounds of "it works in the lab but not in the wild" before they're robust.

> Pro tip: This problem is called "overfitting to the training distribution." The fix is always more diverse data.

---

## Still Stuck?

- **Teachable Machine FAQ:** [teachablemachine.withgoogle.com/faq](https://teachablemachine.withgoogle.com/faq)
- **Community forum:** Search for your issue on the [Google Developers Community](https://developers.google.com/community)
- **Reset everything:** Export what you can, then start fresh with a new project. Sometimes the fastest fix is a clean slate.

---

*Module 2 Troubleshooting Guide | OpenClaw AI Curriculum*
