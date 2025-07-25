## Camera-Scan-App-Test

### Overview

- An app for testing the use of the camera for reading/scanning text

---

### Structure

#### Frontend

- React + Expo application built with `npx create-expo-app@latest frontend`
- Uses Expo Router for tab navigation (`Home` and `About` tabs)
- Custom Button component in `components/Button.tsx`
- Custom ImageViewer component in `components/ImageViewer.tsx`
- Image selection from device library using Expo Image Picker
- Camera integration setup (requires `expo-camera` package, see below)
- Button A on the Home tab is configured to trigger image picking (and can be updated to open the camera)
- Button B is a temporary button and the Go to About screen link redirects to the about screen

---

### Requirements

- React + Expo Go: https://docs.expo.dev/tutorial/create-your-first-app/

---

### Running the Program

#### Running the Frontend

```bash
cd frontend
npx expo start
```