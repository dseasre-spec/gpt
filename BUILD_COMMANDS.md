# أوامر الإنشاء والتثبيت

```bash
npx create-expo-app@latest phantom --template blank@sdk-51
cd phantom
npx expo install expo-router@~3.5.23 react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar expo-font expo-clipboard @react-native-async-storage/async-storage
npm install zustand @supabase/supabase-js react-native-url-polyfill @expo-google-fonts/cairo
npx expo install --fix
```

بعد ذلك استبدل ملفات المشروع بالملفات الموجودة في هذه الحزمة. لا تنسخ ملفات الشعارات؛ أضفها بنفسك إلى `assets/` لاحقاً.
