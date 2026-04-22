  //✅ 2. Traversal
        int[] arr = {2,5,1,8};

        for (int i = 0; i < arr.length; i++) {
            System.out.println("Hi Satendra Coder" + arr[i]);

        }

       // ✅ 3. Min / Max
        int[] arr = {3,7,2,9,5};
        int min = arr[0];
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]<min) min = arr[i];
            if (arr[i]>max) max = arr[i];
        }

        System.out.println("Min Value" + min);
        System.out.println("Max Value" + max);

    // ✅ 4. Reverse (IMPORTANT)
        int[] arr = {1,2,3,4,5};
        int[] reverse = {};

        for (int i = arr.length-1; i>=0; i--) {
            System.out.println("Reverse Arr" + arr[i]);
            reverse = new int[]{arr[i]};

        }
        System.out.println("Reverse Arr" + reverse);
